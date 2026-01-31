import { useTranslation } from "react-i18next";
import { FalseHeader, PageMeta, PageTitle, Section, Wrapper } from "../components";
import { getPolicies } from "../database";
import { PlayBox } from "../components/boxs";

export default function PoliciesPage() {
  const { t } = useTranslation();
  const policies = getPolicies(t);

  return (
    <>
      <PageMeta
        path="policies"
        title={t("policies.title")}
        caption={t("policies.caption")}
      />
      <FalseHeader page />
      <Section>
        <Wrapper>
          <PageTitle
            heading={t("policies.heading")}
            caption={t("policies.caption")}
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
            {policies.map((policy) => (
              <PlayBox key={policy.id} {...policy} variant="legal" />
            ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
