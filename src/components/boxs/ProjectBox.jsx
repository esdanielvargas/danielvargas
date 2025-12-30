import { useTranslation } from "react-i18next";
import Image from "../Image";
import { SmartButton } from "../buttons";

export default function ProjectBox({
  image,
  title,
  description,
  path,
  pathname,
  link,
}) {
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
          className="text-balance text-lg font-semibold mb-2 line-clamp-1"
          title={title}
        >
          {title}
        </h2>
        <p className="w-full min-h-10 text-neutral-400 mb-4 text-sm font-text line-clamp-2">
          {description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea harum earum eos, iure incidunt explicabo voluptatem vero ipsam sint voluptas impedit blanditiis, nemo quae obcaecati, et atque quisquam perspiciatis unde."}
        </p>
        <div className="w-full flex flex-col-reverse lg:flex-row align-center gap-2 mt-4">
          <SmartButton variant="primary" to={pathname + path} full>
            {t("projects.button.info")}
          </SmartButton>
          {link && (
            <SmartButton
              variant="secondary"
              href={`${link}?utm_source=danielvargas.dev&utm_medium=cpc`}
              full
            >
              {t("projects.button.web")}
            </SmartButton>
          )}
        </div>
      </div>
    </div>
  );
}
