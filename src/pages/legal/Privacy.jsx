import { useTranslation } from "react-i18next";
import {
  FalseHeader,
  PageMeta,
  PageTitle,
  SmartButton,
  Wrapper,
} from "../../components";

export default function Privacy() {
  const { t } = useTranslation();
  const date = t("legal.privacy.date");

  return (
    <>
      <PageMeta
        path="/legal/privacy"
        title={t("legal.privacy.title")}
        description={t("legal.privacy.description")}
      />
      <FalseHeader page />
      <section className="w-full min-h-screen flex justify-center">
        <Wrapper>
          <PageTitle
            header={t("legal.privacy.header")}
            description={t("legal.privacy.description")}
          />
          <div className="w-full space-y-4 leading-relaxed font-text text-neutral-700 dark:text-neutral-300">
            <div className="w-full space-y-2">
              <p className="font-normal text-sm/7">
                {t("legal.privacy.intro")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.privacy.sections.1.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.privacy.sections.1.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.privacy.sections.2.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.privacy.sections.2.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.privacy.sections.3.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.privacy.sections.3.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.privacy.sections.4.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.privacy.sections.4.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.privacy.sections.5.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.privacy.sections.5.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.privacy.sections.6.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.privacy.sections.6.content")}
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
