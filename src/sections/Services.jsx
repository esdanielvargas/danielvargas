import { useTranslation } from "react-i18next";
import { getServices } from "../database";
import { SmartButton } from "../components/buttons";
import { ServiceBox } from "../components/boxs";

export default function Services({ line = false }) {
  const { t } = useTranslation();
  const services = getServices(t);

  return (
    <section
      className={`w-full py-14 flex items-start justify-center ${line ? "border-b": ""} border-neutral-900`}
      id="services"
    >
      <div className="w-full max-w-300 mx-4 space-y-14">
        {/* Títulos */}
        <div className="w-full flex items-center justify-center">
          <h2 className="text-3xl font-bold select-none">
            {t("services.header")}
          </h2>
        </div>
        {/* Contenido */}
        <div className="w-full space-y-14">
          {services.slice(0, 2).map((service) => (
            <ServiceBox key={service.id} {...service} />
          ))}
        </div>
        {/* Acciones */}
        <div className="w-full flex items-center justify-end gap-2">
          <SmartButton variant="secondary" to="/services">
            {t("services.button.more")}
          </SmartButton>
        </div>
      </div>
    </section>
  );
}
