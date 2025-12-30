import { Check } from "lucide-react";
import { useTranslation } from "react-i18next";
import { SmartButton } from "../buttons";
import { exchangeRates } from "../../utils";

export default function PlanBox(props) {
  const {
    order,
    plans,
    title,
    price,
    currency,
    features,
    path,
    pathname,
    className = "",
  } = props;
  const { t } = useTranslation();

  const priceData = exchangeRates[currency];
  const convertedPrice = price * priceData.rate;

  return (
    <div
      className={`w-full p-4 flex flex-col gap-3 rounded-lg border border-neutral-200/75 dark:border-neutral-800/75 bg-neutral-100/75 dark:bg-neutral-900 overflow-hidden shadow-sm hover:shadow-md active:shadow-md transition-shadow cursor-default ${order >= plans?.length - 2 ? "lg:col-span-2" : ""
        } ${className}`}
    >
      <div className="w-full space-y-2">
        <h2 className="text-left font-medium text-xs font-sans text-neutral-700 dark:text-neutral-400">
          {title || "Nombre del plan"}
        </h2>
        <p className="py-2 text-left font-bold text-2xl font-sans -my-0.5">
          {`${priceData.symbol}${convertedPrice.toFixed(priceData.decimal)} ${priceData.code
            }`}
        </p>
      </div>
      <hr className="text-neutral-200 dark:text-neutral-800" />
      <ul className="w-full space-y-2.5">
        {features.map((feature, index) => (
          <li
            key={index}
            className="w-full min-w-max min-h-4 flex items-start gap-1.5 text-neutral-600 dark:text-neutral-300"
          >
            <div className="size-4.5 flex items-center justify-center">
              <Check size={12} />
            </div>
            <span className="text-xs font-text">{feature}</span>
          </li>
        ))}
      </ul>
      <hr className="text-neutral-200 dark:text-neutral-800" />
      <div className="w-full space-y-2">
        <SmartButton full variant="secondary" to={pathname + path}>
          {t("plans.button.info")}
        </SmartButton>
        <SmartButton full variant="primary" to={`/checkout/${path}`}>
          {t("plans.button.hire")}
        </SmartButton>
      </div>
    </div>
  );
}
