import { useParams } from "react-router-dom";
import { FieldBlock, PageTitle, Wrapper } from "../components";
import { useTranslation } from "react-i18next";
import { getPlans } from "../database";
import { useEffect, useState } from "react";

const STORAGE_KEY = (path) => `checkout-${path}`;

export default function HirePlan() {
  const { path } = useParams();
  const { t } = useTranslation();
  const plans = getPlans(t);
  const plan = plans.find((plan) => plan.path === path);

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState(() => {
    // Cargar datos previos de localStorage al iniciar
    const saved = localStorage.getItem(STORAGE_KEY(path));
    return saved ? JSON.parse(saved) : {};
  });

  // Guardar datos solo cuando cambian
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY(path), JSON.stringify(formData));
  }, [formData, path]);

  if (!plan) {
    return (
      <section className="w-full h-[calc(100vh_-_90px)] flex justify-center items-center">
        <p className="text-red-500">Plan no encontrado.</p>
      </section>
    );
  }

  const updateField = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const validateStep = () => {
    let newErrors = {};
    if (step === 1) {
      if (!formData.extras || formData.extras.trim().length < 5) {
        newErrors.extras = "Describe más detalles del proyecto.";
      }
    }
    if (step === 2) {
      if (!formData.files?.length && !formData.driveLink) {
        newErrors.files =
          "Sube al menos un archivo o pon un enlace de Google Drive.";
      }
    }
    if (step === 3) {
      if (!formData.name || formData.name.trim().length < 2) {
        newErrors.name = "El nombre es obligatorio.";
      }
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = "Ingresa un correo válido.";
      }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const nextStep = () => {
    if (validateStep()) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => setStep((prev) => prev - 1);

  const Step1 = () => (
    <div className="w-full border">
      <h2 className="text-xl font-bold mb-2">Contratar: {plan.title}</h2>
      <p className="mb-4">Precio: ${plan.price}</p>
      <div className="w-full my-4 space-y-2">
        <FieldBlock
          label="Extras o comentarios"
          text=""
          placeholder={`Escribe los detalles del proyecto.`}
          textarea
          rows={8}
          value={formData.extras || ""}
          onChange={(e) => updateField("extras", e.target.value)}
        />
        {errors.extras && <p className="text-xs font-text text-red-500">{errors.extras}</p>}
      </div>
      <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2">
        Siguiente
      </button>
    </div>
  );

  const Step2 = () => (
    <div>
      <h2 className="text-xl font-bold mb-2">Contenido del proyecto</h2>
      <input
        type="file"
        accept="image/*,video/*,.zip,.txt,.docx,.pdf"
        multiple
        onChange={(e) => updateField("files", Array.from(e.target.files))}
      />
      <label className="block mt-4">
        Enlace de Google Drive:
        <input
          type="url"
          className="border p-2 w-full"
          value={formData.driveLink || ""}
          onChange={(e) => updateField("driveLink", e.target.value)}
        />
      </label>
      {errors.files && <p className="text-red-500">{errors.files}</p>}
      <div className="flex gap-2 mt-4">
        <button onClick={prevStep} className="border px-4 py-2">
          Atrás
        </button>
        <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2">
          Siguiente
        </button>
      </div>
    </div>
  );

  const Step3 = () => (
    <div>
      <h2 className="text-xl font-bold mb-2">Datos de contacto</h2>
      <label className="block mb-2">
        Nombre:
        <input
          type="text"
          className="border p-2 w-full"
          value={formData.name || ""}
          onChange={(e) => updateField("name", e.target.value)}
        />
        {errors.name && <p className="text-red-500">{errors.name}</p>}
      </label>
      <label className="block mb-2">
        Email:
        <input
          type="email"
          className="border p-2 w-full"
          value={formData.email || ""}
          onChange={(e) => updateField("email", e.target.value)}
        />
        {errors.email && <p className="text-red-500">{errors.email}</p>}
      </label>
      <div className="flex gap-2 mt-4">
        <button onClick={prevStep} className="border px-4 py-2">
          Atrás
        </button>
        <button onClick={nextStep} className="bg-blue-600 text-white px-4 py-2">
          Ir al pago
        </button>
      </div>
    </div>
  );

  const Step4 = () => (
    <div>
      <h2 className="text-xl font-bold mb-2">Pago inicial (50%)</h2>
      <p className="mb-4">Monto a pagar: ${(plan.price / 2).toFixed(2)}</p>
      {/* Integrar PayPal y Stripe aquí */}
      <div className="flex gap-4">
        <button className="bg-yellow-500 px-4 py-2">PayPal</button>
        <button className="bg-purple-600 text-white px-4 py-2">Stripe</button>
      </div>
      <div className="mt-4">
        <button onClick={prevStep} className="border px-4 py-2">
          Atrás
        </button>
      </div>
    </div>
  );

  return (
    <section className="w-full h-[calc(100vh_-_90px)] flex justify-center">
      <Wrapper className="">
        <PageTitle header={plan.title} description={` $${plan.price.toFixed(2)}`} />
        {/* <div className="">{path} = {plan.title}</div> */}
        {step === 1 && <Step1 />}
        {step === 2 && <Step2 />}
        {step === 3 && <Step3 />}
        {step === 4 && <Step4 />}
      </Wrapper>
    </section>
  );
}
