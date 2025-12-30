// import { useTranslation } from "react-i18next";
import Image from "../Image";
import { SmartButton } from "../buttons";

export default function ServiceBox({
  order,
  image,
  title,
  description,
  // path,
  // pathname,
}) {
  // const { t } = useTranslation();

  return (
    <div
      className={`w-full flex flex-col ${
        order % 2 !== 0 ? "md:flex-row-reverse " : "md:flex-row "
      }items-start gap-10 justify-between`}
    >
      {/* Imagen */}
      <div
        className={`w-full md:w-auto flex items-center justify-center ${
          order % 2 !== 0 ? "md:justify-end" : "md:justify-start"
        }`}
      >
        <div className="w-full md:min-w-[400px] max-w-[400px] flex items-center justify-center rounded-4xl border border-neutral-300 dark:border-neutral-700 overflow-hidden">
          <Image
            width={400}
            height={240}
            loading="eager"
            src={image}
            alt={title}
            title={title}
          />
        </div>
      </div>
      {/* Texto */}
      <div
        className={`w-full gap-4 flex flex-col items-center text-center ${
          order % 2 !== 0
            ? "md:items-end md:text-right"
            : "md:items-start md:text-left"
        }`}
      >
        <h2 className="text-sm md:text-lg lg:text-xl font-bold">{title}</h2>
        <p className="text-balance text-normal text-sm/6 text-neutral-400 mb-1">
          {description}
        </p>
        <div
          className={`w-full flex flex-col-reverse md:flex-row items-center ${
            order % 2 !== 0 ? "justify-end" : "justify-start"
          } gap-2`}
        >
          {/* <SmartButton variant="primary" to={`/checkout/${path}`}>
            {t("services.button.hire")}
          </SmartButton> */}
          {/* <SmartButton
            //  variant="secondary"
            to={pathname + path}
          >
            {t("services.button.info")}
          </SmartButton> */}
          {/* <SmartButton href>{t("services.button.hire")}</SmartButton> */}
        </div>
      </div>
    </div>
  );
}
