import { useTranslation } from "react-i18next";
import {
  FalseHeader,
  PageMeta,
  PageTitle,
  PlanBox,
  Section,
  Wrapper,
} from "../components";
import { getPlans } from "../database";
import { useState } from "react";
import { exchangeRates } from "../utils";
import { ChevronDown } from "lucide-react";

export default function Plans() {
  const { t } = useTranslation();
  const plans = getPlans(t);
  const [currency, setCurrency] = useState("USD");

  return (
    <>
      <PageMeta
        path="plans"
        title={t("plans.title")}
        description={t("plans.description")}
      />
      <FalseHeader page />
      <Section>
        <Wrapper>
          <PageTitle
            path="/plans"
            title={t("plans.title")}
            header={t("plans.header")}
            description={t("plans.description")}
            positionX="end"
          >
            <div className="h-8.5 relative flex items-center justify-center cursor-pointer overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <select
                value={currency}
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
          </PageTitle>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
            {plans
              .filter((plan) => plan.show)
              .sort((a, b) => a.order - b.order)
              .map((plan) => (
                <PlanBox
                  key={plan.id}
                  {...plan}
                  plans={plans}
                  currency={currency}
                />
              ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
