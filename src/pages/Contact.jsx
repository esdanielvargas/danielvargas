import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom"; // Asumo que usas React Router
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import { FieldBlock } from "../components";

export default function Contact() {
  const [searchParams] = useSearchParams();
  const planSeleccionado = searchParams.get("plan");
  const serviceSeleccionado = searchParams.get("service");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (planSeleccionado) {
      setFormData((prev) => ({
        ...prev,
        message: `Hola Daniel, estoy interesado en contratar el plan ${planSeleccionado.toUpperCase()}. Me gustaría empezar cuanto antes.`,
      }));
    }

    if (serviceSeleccionado) {
      setFormData((prev) => ({
        ...prev,
        message: `Hola Daniel, estoy interesado en contratar el servicio ${serviceSeleccionado.toUpperCase()}. Me gustaría empezar cuanto antes.`,
      }));
    }
  }, [planSeleccionado, serviceSeleccionado]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("¡Mensaje enviado! (Simulación)");
    console.log(formData);
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-22.5 font-sans">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold -text-gray-900 mb-4">
            {planSeleccionado ? "Vamos a empezar tu proyecto" : "Hablemos"}
          </h1>
          <p className="text-lg text-neutral-400">
            {planSeleccionado
              ? `Has elegido el plan ${planSeleccionado}. Cuéntame un poco más para formalizar.`
              : "¿Tienes una idea en mente? Estoy listo para construirla."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-neutral-900 border border-neutral-800 rounded-lg shadow-xl overflow-hidden">
          {/* Columna Izquierda: Info de Contacto */}
          <div className="p-6 md:p-10 relative flex flex-col justify-between">
            <div className="z-2">
              <h3 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold font-grotesk">
                Información de Contacto
              </h3>
              <p className="mb-6 md:mb-8 text-indigo-100 font-grotesk">
                Respondo rápido. Si es urgente, mándame un DM en Twitter o
                LinkedIn.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <span>hello@danielvargas.dev</span>
                </div>
                <div className="hidden items-center space-x-4">
                  <Phone className="w-6 h-6" />
                  <span>+503 1234 5678</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6" />
                  <span>San Salvador, El Salvador</span>
                </div>
              </div>
            </div>

            {/* Un pequeño detalle visual */}
            <div className="z-2 mt-12">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5" />
                <span className="flex items-center text-sm">
                  Disponible para nuevos proyectos
                </span>
              </div>
            </div>

            <div className="absolute z-1 inset-0 flex items-center justify-center">
              <img
                src="/images/gradient-i.svg"
                alt=""
                className="size-full object-cover object-center pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Columna Derecha: El Formulario */}
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <FieldBlock
                name="full_name"
                type="text"
                label="Nombre completo"
                text="Ingrese su nombre completo."
                placeholder="Su nombre"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <FieldBlock
                name="email"
                type="email"
                label="Correo electrónico"
                text="Ingrese su correo electrónico."
                placeholder="alias@dominio.com"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <FieldBlock
                name="message"
                textarea
                rows={4}
                label="Mensaje"
                text="¿Qué tienes en mente para su proyecto?"
                placeholder="Cuénteme sobre su proyecto..."
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />

              <button
                type="submit"
                className="w-full relative text-white font-bold font-grotesk cursor-pointer py-4 overflow-hidden rounded-lg transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="z-2 flex items-center justify-center gap-4">
                  <Send className="w-5 h-5" />
                  {planSeleccionado ? "Solicitar Cotización" : "Enviar Mensaje"}
                </div>
                <img
                  src="/images/gradient-i.svg"
                  alt=""
                  className="absolute z-1 size-full object-cover object-center pointer-events-none select-none"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
