import { useTranslation } from "react-i18next";
import { FalseHeader, PageMeta, PageTitle, SmartButton, Wrapper } from "../../components";

export default function Cookies() {
  const { t } = useTranslation();
  const date = t("legal.cookies.date");

  return (
    <>
      <PageMeta
        path="/legal/cookies"
        title={t("legal.cookies.title")}
        description={t("legal.cookies.description")}
      />
      <FalseHeader page />
      <section className="w-full min-h-screen flex justify-center">
        <Wrapper>
          <PageTitle
            header={t("legal.cookies.header")}
            description={t("legal.cookies.description")}
          />
          <div className="w-full space-y-4 leading-relaxed font-text  text-neutral-700 dark:text-neutral-300">
            <div className="w-full space-y-2">
              <p className="font-normal text-sm/7">
                {t("legal.cookies.intro")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.cookies.sections.1.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.cookies.sections.1.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.cookies.sections.2.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.cookies.sections.2.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.cookies.sections.3.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.cookies.sections.3.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.cookies.sections.4.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.cookies.sections.4.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.cookies.sections.5.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.cookies.sections.5.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("legal.cookies.sections.6.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("legal.cookies.sections.6.content")}
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
