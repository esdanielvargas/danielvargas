import { useTranslation } from "react-i18next";
import { SmartButton } from "../buttons";
import { Check } from "lucide-react";

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
    className = "",
  } = props;
  const { t } = useTranslation();

  const displayPrice = text ? text : `$${price.toLocaleString("en-US")} USD`;

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

        {/* Precio o texto */}
        <p className="w-full text-left font-bold text-3xl font-grotesk">
          {displayPrice}
        </p>

        {/* Descripción corta (Caption) */}
        {caption && (
          <p className="w-full text-left text-xs font-grotesk text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {caption}
          </p>
        )}

        <hr className="text-neutral-200 dark:text-neutral-800" />

        {/* Lista de */}
        {features && (
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
      </div>
      <div className="w-full flex flex-col items-center justify-center gap-2">
        <SmartButton
          full
          variant="primary"
          to={`/contact?plan=${path}`}
        >
          {text ? "Solicitar cotización" : t("plans.button.hire")}
        </SmartButton>
      </div>
    </div>
  );
}
