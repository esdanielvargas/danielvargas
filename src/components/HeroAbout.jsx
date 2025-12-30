import { useTranslation } from "react-i18next";
import Image from "./Image";
import { SmartButton } from "./buttons";

export default function HeroAbout({ title, path }) {
  const { t } = useTranslation();

  return (
    <div className="w-full py-8 flex flex-col md:flex-row items-center justify-center gap-6 overflow-hidden border-b border-neutral-200 dark:border-neutral-800">
      <title>{title && title}</title>
      <link rel="canonical" href={`${window.location.origin}${path}`} />
      {/* 264px */}
      <div className="min-w-[384px] min-h-[384px] md:min-w-[310px] md:min-h-[310px] lg:min-w-[264px] lg:min-h-[264px] md:max-w-67 overflow-hidden rounded-4xl border-2 border-neutral-400 dark:border-neutral-600 shadow-md">
        <Image
          size={384}
          loading="eager"
          src="/images/profile.png"
          alt={t("about.image.alt")}
          title={t("about.image.title")}
        />
      </div>
      <div className="w-full flex flex-col gap-6 text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-neutral-950 dark:text-neutral-100">
          {t("about.heading")}
        </h1>
        <p className="w-70/100 text-sm md:text-md lg:text-md leading-7 font-text text-neutral-700 dark:text-neutral-300">
          {t("about.description")}
        </p>
        <span className="text-xs md:text-sm font-code text-neutral-600 dark:text-neutral-400">
          <em>"{t("about.quote")}"</em>
        </span>
        <div className="w-full flex items-center justify-start gap-4">
          <SmartButton
            variant="primary"
            href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=hello@danielvargas.dev"
          >
            {t("about.button.contact")}
          </SmartButton>
          <SmartButton variant="secondary" href="/resume">
            {t("about.button.resume")}
          </SmartButton>
        </div>
      </div>
    </div>
  );
}
