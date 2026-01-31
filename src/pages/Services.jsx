import { useTranslation } from "react-i18next";
import {
  FalseHeader,
  PageMeta,
  PageTitle,
  Section,
  ServiceBox,
  Wrapper,
} from "../components";
import { getServices } from "../database";

export default function Services() {
  const { t } = useTranslation();
  const services = getServices(t);

  return (
    <>
      <PageMeta
        path="services"
        title={t("services.title")}
        caption={t("services.caption")}
      />
      <FalseHeader page />
      <Section>
        <Wrapper>
          <PageTitle
            heading={t("services.heading")}
            caption={t("services.caption")}
          />
          <div className="w-full space-y-10">
            {services
              .filter((service) => service.show)
              .sort((a, b) => a.order - b.order)
              .map((service) => (
                <ServiceBox key={service.id} {...service} />
              ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
