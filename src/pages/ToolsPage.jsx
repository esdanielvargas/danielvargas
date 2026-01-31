import { useTranslation } from "react-i18next";
import { FalseHeader, PageMeta, PageTitle, Wrapper } from "../components";
import { getTools } from "../database";
import { PlayBox } from "../components/boxs";

export default function ToolsPage() {
  const { t } = useTranslation();
  const tools = getTools(t);

  return (
    <>
      <PageMeta
        path="tools"
        title={t("tools.title")}
        caption={t("tools.caption")}
      />
      <FalseHeader page />
      <section className="w-full flex justify-center">
        <Wrapper>
          <PageTitle
            path="/tools"
            heading={t("tools.heading")}
            caption={t("tools.caption")}
          />
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
            {tools
              .filter((tool) => tool.show)
              .map((tool) => (
                <PlayBox key={tool.id} {...tool} variant="tool" />
              ))}
          </div>
        </Wrapper>
      </section>
    </>
  );
}
