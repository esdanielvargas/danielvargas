import { useTranslation } from "react-i18next";
import { SmartButton } from "../components/buttons";

export default function Hero({ line = false }) {
  const { t } = useTranslation();

  return (
    <>
      <section
        className={`w-full h-screen z-55 flex items-center justify-center bg-neutral-950/25 bg-cover bg-bottom ${
          line ? "border-b" : ""
        } border-neutral-900`}
      >
        <img
          src="/images/hero.png"
          alt="Banner del sitio web de Daniel Vargas"
          title="Banner del sitio web de Daniel Vargas"
          width={1905}
          height={917}
          loading="eager"
          className="size-full z-0 object-cover object-center absolute inset-0 select-none pointer-events-none"
        />
        <div className="size-full max-w-300 mx-4 z-1 flex flex-col items-start justify-center gap-8">
          <h1 className="text-center md:text-left text-2xl md:text-3xl lg:text-4xl font-bold text-neutral-50 text-balance">
            {t("pages.home.title")}
          </h1>
          <h2 className="text-center md:text-left font-normal text-md md:text-md lg:text-lg leading-8 font-text text-neutral-300 text-balance">
            {t("pages.home.caption")}
          </h2>
          <div className="w-full flex items-center justify-center md:justify-start gap-5">
            <SmartButton variant="primary" to="/plans">
              {t("common.action.view_plans")}
            </SmartButton>
            <SmartButton variant="secondary" to="/projects">
              {t("common.action.view_projects")}
            </SmartButton>
          </div>
        </div>
      </section>
    </>
  );
}
