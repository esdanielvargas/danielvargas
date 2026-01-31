import { useTranslation } from "react-i18next";
import { SmartButton } from "../components/buttons";
import { getPlans } from "../database";
import { PlanBox } from "../components/boxs";

export default function Plans({ line = false }) {
  const { t } = useTranslation();
  const plans = getPlans(t);

  return (
    <section
      className={`w-full py-14 flex items-center justify-center ${
        line ? "border-b" : ""
      } border-neutral-900`}
      id="plans"
    >
      <div className="w-full max-w-300 mx-4 space-y-14">
        {/* Títulos */}
        <div className="w-full flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl font-bold select-none">
            {t("plans.heading")}
          </h2>
        </div>
        {/* Contenido */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
          {plans
            .filter((plan) => plan.show)
            .slice(0, 3)
            .sort((a, b) => a.order - b.order)
            .map((plan) => (
              <PlanBox key={plan.id} {...plan} />
            ))}
        </div>
        {/* Acciones */}
        <div className="w-full flex items-center justify-end gap-2">
          <SmartButton variant="secondary" to="/plans">
            {t("common.action.view_more_plans")}
          </SmartButton>
        </div>
      </div>
    </section>
  );
}
