import { useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Mail, MapPin, CheckCircle, Smartphone } from "lucide-react";
import { FieldBlock, SmartButton } from "../components";
import { getPlans, getServices } from "../database";
import { useTranslation } from "react-i18next";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const planSelected = searchParams.get("plan");
  const serviceSelected = searchParams.get("service");

  const plans = useMemo(() => getPlans(t), [t]);
  const services = useMemo(() => getServices(t), [t]);

  const activePlan = useMemo(
    () => plans.find((plan) => plan.path === planSelected),
    [plans, planSelected],
  );

  const activeService = useMemo(
    () => services.find((service) => service.path === serviceSelected),
    [services, serviceSelected],
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    if (formData.message !== "") return;

    if (activePlan) {
      setFormData((prev) => ({
        ...prev,
        message: t("contact.form.message_plan", { val: activePlan.title }),
      }));
    } else if (activeService) {
      setFormData((prev) => ({
        ...prev,
        message: t("contact.form.message_service", {
          val: activeService.title,
        }),
      }));
    }
  }, [activePlan, activeService, formData.message, t]);

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const time = new Date().toLocaleString("es-ES", {
      dateStyle: "full",
      timeStyle: "short",
    });

    const serviceGmail = import.meta.env.VITE_EMAILJS_SERVICE_GMAIL;
    const serviceOutlook = import.meta.env.VITE_EMAILJS_SERVICE_OUTLOOK;
    const templateContact = import.meta.env.VITE_EMAILJS_TEMPLATE_CONTACT;
    const templateAutoReply = import.meta.env.VITE_EMAILJS_TEMPLATE_AUTOREPLY;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const templateContactParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
      time: time,
    };
    
    const templateAutoReplyParams = {
      name: formData.name,
      email: formData.email,
    };

    const sendContact = emailjs.send(
      serviceOutlook,
      templateContact,
      templateContactParams,
      publicKey,
    );

    const sendAutoReply = emailjs.send(
      serviceGmail,
      templateAutoReply,
      templateAutoReplyParams,
      publicKey,
    );

    Promise.all([sendContact, sendAutoReply])
      .then((responses) => {
        console.log("¡ÉXITO!", responses);
        setFormData({ name: "", email: "", message: "" });
        setSearchParams({});
      })
      .catch((err) => {
        console.error("FAILED...", err);
        alert("Hubo un error al enviar uno de los mensajes.");
      })
      .finally(() => {
        setLoading(false);
        setSearchParams({});
      });
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 mt-22.5 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold mb-4">
            {planSelected
              ? t("contact.hero.title_start")
              : t("contact.hero.title_default")}
          </h1>

          <p className="text-lg text-neutral-400">
            {planSelected
              ? t("contact.hero.subtitle_plan", {
                  val: activePlan?.title,
                })
              : serviceSelected
                ? t("contact.hero.subtitle_service", {
                    val: activeService?.title,
                  })
                : t("contact.hero.subtitle_default")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg shadow-xl overflow-hidden">
          {/* Columna Izquierda: Info de Contacto */}
          <div className="p-6 md:p-10 relative flex flex-col justify-between text-neutral-50">
            <div className="z-2">
              <h2 className="mb-4 md:mb-6 text-xl md:text-2xl font-bold font-grotesk">
                {t("contact.form.title")}
              </h2>
              <p className="mb-6 md:mb-8 text-sm font-grotesk">
                {t("contact.form.caption")}
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6" />
                  <span>hello@danielvargas.dev</span>
                </div>
                <div className="hidden items-center space-x-4">
                  <Smartphone className="w-6 h-6" />
                  <span>{"+(503) 1234-5678"}</span>
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
                <span className="mt-0.5 flex items-center text-sm">
                  {t("contact.form.quote")}
                </span>
              </div>
            </div>

            <div className="absolute z-1 inset-0 flex items-center justify-center">
              <img
                src="/images/gradient-i.svg"
                alt=""
                title=" "
                loading="eager"
                width={426.5}
                height={488}
                className="size-full object-cover object-center pointer-events-none select-none"
              />
            </div>
          </div>

          {/* Columna Derecha: El Formulario */}
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <FieldBlock
                name="name"
                type="text"
                label={t("contact.form.name.label")}
                placeholder={t("contact.form.name.placeholder")}
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
              <FieldBlock
                name="email"
                type="email"
                label={t("contact.form.email.label")}
                placeholder={t("contact.form.email.placeholder")}
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
                label={t("contact.form.message.label")}
                placeholder={t("contact.form.message.placeholder")}
                required
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
              <SmartButton
                full
                type="submit"
                className="transition duration-300 transform hover:-translate-y-1"
              >
                {loading
                  ? t("common.action.sending")
                  : planSelected
                    ? t("common.action.request_quote")
                    : t("common.action.send_message")}
              </SmartButton>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
