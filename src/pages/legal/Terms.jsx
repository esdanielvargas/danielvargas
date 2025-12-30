import { useTranslation } from "react-i18next";
import {
  FalseHeader,
  PageMeta,
  PageTitle,
  SmartButton,
  Wrapper,
} from "../../components";

export default function Terms() {
  const { t } = useTranslation();
  const date = t("legal.terms.date");

  return (
    <>
      <PageMeta
        path="legal/terms"
        title={t("legal.terms.title")}
        description={t("legal.terms.description")}
      />
      <FalseHeader page />
      <section className="w-full min-h-screen flex justify-center">
        <Wrapper>
          <PageTitle
            header={t("legal.terms.header")}
            description={t("legal.terms.description")}
          />
          <div className="w-full space-y-4 leading-relaxed font-text text-neutral-700 dark:text-neutral-300">
            <div className="w-full space-y-2">
              <p className="font-normal text-sm/7">{t("legal.terms.intro")}</p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.terms.sections.1.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.terms.sections.1.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.terms.sections.2.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.terms.sections.2.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.terms.sections.3.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.terms.sections.3.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.terms.sections.4.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.terms.sections.4.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.terms.sections.5.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.terms.sections.5.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.terms.sections.6.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.terms.sections.6.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.terms.sections.7.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.terms.sections.7.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.terms.sections.8.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.terms.sections.8.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <p className="font-normal text-sm/7 italic">
                {t("legal.updated", { date })}
              </p>
            </div>
          </div>
          <SmartButton to="/legal">{t("legal.button.back")}</SmartButton>
        </Wrapper>
      </section>
    </>
  );
}
