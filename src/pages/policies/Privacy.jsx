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
  const date = t("policies.privacy.date");

  return (
    <>
      <PageMeta
        path="/policies/privacy"
        title={t("policies.privacy.title")}
        description={t("policies.privacy.description")}
      />
      <FalseHeader page />
      <section className="w-full min-h-screen flex justify-center">
        <Wrapper>
          <PageTitle
            heading={t("policies.privacy.heading")}
            caption={t("policies.privacy.caption")}
          />
          <div className="w-full space-y-4 leading-relaxed font-text text-neutral-700 dark:text-neutral-300">
            <div className="w-full space-y-2">
              <p className="font-normal text-sm/7">
                {t("policies.privacy.intro")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("policies.privacy.sections.1.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("policies.privacy.sections.1.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("policies.privacy.sections.2.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("policies.privacy.sections.2.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("policies.privacy.sections.3.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("policies.privacy.sections.3.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("policies.privacy.sections.4.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("policies.privacy.sections.4.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("policies.privacy.sections.5.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("policies.privacy.sections.5.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <h2 className="font-semibold text-md font-sans text-white">
                {t("policies.privacy.sections.6.title")}
              </h2>
              <p className="font-normal text-sm/7">
                {t("policies.privacy.sections.6.content")}
              </p>
            </div>
            <div className="w-full space-y-2">
              <p className="font-normal text-sm/7 italic">
                {t("policies.updated", { date })}
              </p>
            </div>
          </div>
          <SmartButton to="/policies">{t("policies.button.back")}</SmartButton>
        </Wrapper>
      </section>
    </>
  );
}
