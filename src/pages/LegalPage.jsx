import { useTranslation } from "react-i18next";
import { FalseHeader, PageMeta, PageTitle, Section, Wrapper } from "../components";
import { getLegal } from "../database";
import { PlayBox } from "../components/boxs";

export default function LegalPage() {
  const { t } = useTranslation();
  const policies = getLegal(t);

  return (
    <>
      <PageMeta
        path="legal"
        title={t("legal.title")}
        description={t("legal.description")}
      />
      <FalseHeader page />
      <Section>
        <Wrapper>
          <PageTitle
            header={t("legal.header")}
            description={t("legal.description")}
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
