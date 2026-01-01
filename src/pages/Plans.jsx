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

export default function Plans() {
  const { t } = useTranslation();
  const plans = getPlans(t);

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
          ></PageTitle>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
            {plans
              .filter((plan) => plan.show)
              .sort((a, b) => a.order - b.order)
              .map((plan) => (
                <PlanBox key={plan.id} {...plan} plans={plans} />
              ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
