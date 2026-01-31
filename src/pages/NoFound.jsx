import { useTranslation } from "react-i18next";
import { Wrapper } from "../components";
import { SmartButton } from "../components/buttons";

export default function NoFound() {
  const { t } = useTranslation();

  return (
    <section className="w-full h-[calc(100vh_-_90px)] flex justify-center">
      <Wrapper>
        <meta name="robots" content="noindex, nofollow" />
        <title>{t("pages.bug.title")}</title>
        <div className="size-full flex flex-col items-center justify-center gap-6 select-none">
          <span className="font-black text-9xl font-code">404</span>
          <h1 className="font-medium text-xl md:text-2xl font-sans">
            {t("pages.bug.heading")}
          </h1>
          <p className="text-center max-w-md font-normal text-sm md:text-md font-text text-neutral-400 text-balance">
            {t("pages.bug.caption")}
          </p>
          <div className=" flex items-center justify-center gap-4">
            <SmartButton variant="primary" to="/">
              {t("common.action.back_home")}
            </SmartButton>
            <SmartButton
              variant="secondary"
              onClick={() => window.history.back()}
            >
              {t("common.action.go_back")}
            </SmartButton>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
