import { useTranslation } from "react-i18next";
import { SmartButton } from "../buttons";
import { Check, ShieldCheck } from "lucide-react";

export default function PlanBox(props) {
  const {
    order,
    plans,
    title,
    price,
    text,
    caption,
    features,
    path,
    period,
    pricePrefix,
    maintenance,
    className = "",
  } = props;
  const { t } = useTranslation();

  return (
    <div
      className={`w-full p-2 md:p-4 flex flex-col items-start justify-between gap-4 rounded-lg border border-neutral-200/75 dark:border-neutral-800/75 bg-neutral-100/75 dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-md active:shadow-md transition-shadow cursor-default ${
        order >= plans?.length - 1
          ? "col-span-1 md:col-span-3 lg:col-span-3"
          : ""
      } ${className}`}
    >
      <div className="w-full flex flex-col gap-2">
        {/* Titulo */}
        <h2 className="w-full text-left font-medium text-xs font-grotesk text-neutral-700 dark:text-neutral-400">
          {title || "Nombre del plan"}
        </h2>

        <div className="w-full text-left font-bold text-3xl font-grotesk flex flex-wrap items-baseline gap-1">
          {text ? (
            <span>{text}</span>
          ) : (
            <div className="w-full min-h-13 flex flex-col justify-center">
              {pricePrefix ? (
                <div className="flex flex-col items-start">
                  {pricePrefix && (
                    <span className="font-medium text-xs uppercase tracking-wide">
                      {pricePrefix}
                    </span>
                  )}
                  <span>
                    ${price?.toLocaleString("en-US")}
                    <span className="font-black text-lg uppercase tracking-wide">{" USD"}</span>
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-start">
                  <span>
                    ${price?.toLocaleString("en-US")}
                    <span className="font-black text-lg uppercase tracking-wide">{" USD"}</span>
                  </span>
                  {period && (
                    <span className="text-xs font-medium uppercase tracking-wide">
                      {" "}
                      {period}
                    </span>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Descripción corta (Caption) */}
        {caption && (
          <p className="w-full text-left text-xs font-grotesk text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {caption}
          </p>
        )}

        <hr className="text-neutral-200 dark:text-neutral-800" />

        {/* Lista de incluidos */}
        {Array.isArray(features) && features.length > 0 && (
          <ul className="w-full space-y-2.5">
            {features?.map((feature, index) => (
              <li
                key={index}
                className="w-full min-w-max min-h-4 flex items-start gap-1.5 text-neutral-600 dark:text-neutral-300"
              >
                <div className="size-4.5 flex items-center justify-center">
                  <Check size={12} />
                </div>
                <span className="text-xs font-grotesk">{feature}</span>
              </li>
            ))}
          </ul>
        )}

        {maintenance && (
          <div className="w-full mt-2 p-3 rounded-md bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 overflow-hidden">
            <div className="flex items-center gap-2 mb-1">
              <ShieldCheck
                size={14}
                className="text-sky-600 dark:text-sky-400"
              />
              <span className="text-xs font-bold text-neutral-800 dark:text-neutral-200">
                {maintenance.title}
              </span>
            </div>

            <div className="flex justify-between items-baseline w-full gap-2">
              <p className="w-full font-medium text-[10.5px] leading-tight text-neutral-500">
                {maintenance.caption}
              </p>
              <div className="min-w-fit flex flex-col text-right">
                <span className="text-sm font-bold block text-neutral-800 dark:text-neutral-200">
                  +${maintenance.price}
                </span>
                <span className="text-[10px] text-neutral-400">
                  {maintenance.period}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <SmartButton full variant="primary" to={`/contact?plan=${path}`}>
          {text
            ? t("common.action.request_quote")
            : t("common.action.hire_plan")}
        </SmartButton>
      </div>
    </div>
  );
}
