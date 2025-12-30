import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FalseHeader, FieldBlock, PageTitle, Wrapper } from "../../components";
import { SmartButton } from "../../components/buttons";

export default function UTMGenerator() {
  const { t } = useTranslation();

  const [form, setForm] = useState({
    base: "",
    source: "",
    medium: "",
    campaign: "",
    id: "",
    term: "",
    content: "",
  });

  const [generatedURL, setGeneratedURL] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const generateURL = () => {
    const { base, source, medium, campaign, id, term, content } = form;
    if (!base || !source || !medium || !campaign) return;

    const params = new URLSearchParams({
      utm_source: source,
      utm_medium: medium,
      utm_campaign: campaign,
    });

    if (id) params.append("utm_id", id);
    if (term) params.append("utm_term", term);
    if (content) params.append("utm_content", content);

    setGeneratedURL(`${base}?${params.toString()}`);
    setCopied(false);
  };

  const copyToClipboard = async () => {
    if (!generatedURL) return;
    await navigator.clipboard.writeText(generatedURL);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <FalseHeader page />
      <section className="w-full min-h-screen flex justify-center">
        <Wrapper>
          <PageTitle
            path="/tools/utm"
            title={t("tools.utm.title")}
            header={t("tools.utm.header")}
            description={t("tools.utm.description")}
          />
          <div className="w-full flex flex-col md:flex-row-reverse md:items-start gap-4">
            <div className="w-full p-4 flex flex-col gap-4 rounded-lg bg-neutral-900 border border-neutral-800">
              <FieldBlock
                id="utm_base"
                name="base"
                label={t("tools.utm.base_label")}
                text={t("tools.utm.base_text")}
                placeholder="https://danielvargas.dev/path"
                onChange={handleChange}
                value={form.base}
                required
              />
              <FieldBlock
                id="utm_source"
                name="source"
                label={t("tools.utm.source_label")}
                text={t("tools.utm.source_text")}
                placeholder="utm_source"
                onChange={handleChange}
                value={form.source}
                required
              />
              <FieldBlock
                id="utm_medium"
                name="medium"
                label={t("tools.utm.medium_label")}
                text={t("tools.utm.medium_text")}
                placeholder="utm_medium"
                onChange={handleChange}
                value={form.medium}
                required
              />
              <FieldBlock
                id="utm_campaign"
                name="campaign"
                label={t("tools.utm.campaign_label")}
                text={t("tools.utm.campaign_text")}
                placeholder="utm_campaign"
                onChange={handleChange}
                value={form.campaign}
                required
              />
              <FieldBlock
                id="utm_id"
                name="id"
                label={t("tools.utm.id_label")}
                text={t("tools.utm.id_text")}
                placeholder="utm_id"
                onChange={handleChange}
                value={form.id}
              />
              <FieldBlock
                id="utm_term"
                name="term"
                label={t("tools.utm.term_label")}
                text={t("tools.utm.term_text")}
                placeholder="utm_term"
                onChange={handleChange}
                value={form.term}
              />
              <FieldBlock
                id="utm_content"
                name="content"
                label={t("tools.utm.content_label")}
                text={t("tools.utm.content_text")}
                placeholder="utm_content"
                onChange={handleChange}
                value={form.content}
              />
              <SmartButton variant="primary" full onClick={generateURL}>
                {t("tools.utm.generate_button")}
              </SmartButton>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="w-full p-4 flex flex-col gap-4 rounded-lg bg-neutral-900 border border-neutral-800">
                <FieldBlock
                  label={t("tools.utm.generated_url_label")}
                  text={t("tools.utm.generated_url_text")}
                  readOnly
                  value={generatedURL}
                  placeholder="https://danielvargas.dev/tools/utm?utm_source=value&utm_medium=value&utm_campaign=value&utm_id=00000000&utm_term=value+value+value+value&utm_content=value+value+value"
                />
                <div className="flex items-center justify-end">
                  <SmartButton variant="gray" onClick={copyToClipboard}>
                    {copied ? "Copiado" : "Copiar"}
                  </SmartButton>
                </div>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-4">
                <SmartButton variant="border" to="/tools" full>
                  {t("tools.button.back")}
                </SmartButton>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
