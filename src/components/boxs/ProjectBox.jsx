import { useTranslation } from "react-i18next";
import Image from "../Image";
import { SmartButton } from "../buttons";

export default function ProjectBox({ image, title, caption, link }) {
  const { t } = useTranslation();

  return (
    <div className="bg-neutral-100 dark:bg-neutral-900 rounded-md overflow-hidden shadow-md hover:shadow-xl transition-shadow border border-neutral-200 dark:border-neutral-800">
      <div className="w-full relative">
        <Image
          src={image}
          alt={title}
          title={title}
          width={449.5}
          height={214.67}
          loading="eager"
          className="md:max-h-[214.67px] lg:max-h-[187.53px]"
        />
      </div>
      <div className="p-4 border-t border-neutral-800">
        <h2
          className="text-balance text-base lg:text-lg font-semibold mb-2 line-clamp-1"
          title={title}
        >
          {title}
        </h2>
        <p
          className="w-full min-h-10 text-neutral-400 mb-4 text-xs/5 lg:text-sm font-text line-clamp-3 md:line-clamp-2"
          title={caption}
        >
          {caption || "Descripción corta del proyecto."}
        </p>
        <div className="w-full flex flex-col lg:flex-row align-center gap-2 mt-4">
          {link && (
            <SmartButton
              variant="primary"
              href={`${link}?utm_source=danielvargas.dev&utm_medium=cpc`}
              full
            >
              {t("common.action.visit_website")}
            </SmartButton>
          )}
        </div>
      </div>
    </div>
  );
}
