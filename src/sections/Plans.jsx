import { useTranslation } from "react-i18next";
import { SmartButton } from "../components/buttons";
import { getPlans } from "../database";
import { PlanBox } from "../components/boxs";
import { useState } from "react";
import { exchangeRates } from "../utils";
import { ChevronDown } from "lucide-react";

export default function Plans({ line = false }) {
  const { t } = useTranslation();
  const plans = getPlans(t);
  const [currency, setCurrency] = useState("USD");

  return (
    <section
      className={`w-full py-14 flex items-center justify-center ${
        line ? "border-b" : ""
      } border-neutral-900`}
      id="plans"
    >
      <div className="w-full max-w-300 mx-4 space-y-14">
        {/* Títulos */}
        <div className="w-full flex items-center justify-between">
          <h2 className="text-3xl font-bold select-none">{t("plans.header")}</h2>
          <div className="h-8.5 relative flex items-center justify-center cursor-pointer overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <select
              value={currency}
              name="currency"
              title="Select your currency"
              onChange={(e) => setCurrency(e.target.value)}
              className="w-full h-8.5 px-3 pr-10 cursor-pointer text-xs/3.5 font-grotesk select-none appearance-none bg-neutral-100 dark:bg-neutral-900 focus:outline-0"
            >
              {Object.values(exchangeRates)
                .filter((item) => item.show)
                .map(({ code, title }) => (
                  <option key={code} value={code} title={title}>
                    {title}
                  </option>
                ))}
            </select>
            <ChevronDown
              size={18}
              className="absolute right-2.5 pointer-events-none"
            />
          </div>
        </div>
        {/* Contenido */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
          {plans
            .filter((plan) => plan.show)
            .slice(0, 3)
            .sort((a, b) => a.order - b.order)
            .map((plan) => (
              <PlanBox key={plan.id} {...plan} currency={currency} />
            ))}
        </div>
        {/* Acciones */}
        <div className="w-full flex items-center justify-end gap-2">
          <SmartButton variant="secondary" to="/plans">
            {t("plans.button.more")}
          </SmartButton>
        </div>
      </div>
    </section>
  );
}
