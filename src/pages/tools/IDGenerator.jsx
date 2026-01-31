import { useTranslation } from "react-i18next";
import {
  FalseHeader,
  FieldBlock,
  PageMeta,
  PageTitle,
  SmartButton,
  Wrapper,
} from "../../components";
import { generateID } from "../../utils";
import { useState } from "react";

export default function IDGenerator() {
  const { t } = useTranslation();

  const [options, setOptions] = useState({
    type: "alphanumeric",
    length: 14,
    prefix: "",
    suffix: "",
  });

  const [generatedID, setGeneratedID] = useState(generateID(options));

  const handleGenerate = () => {
    setGeneratedID(generateID(options));
  };

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedID);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <PageMeta
        path="tools/id-generator"
        title={t("tools.id_generator.title")}
        caption={t("tools.id_generator.caption")}
      />
      <FalseHeader page />
      <section className="w-full flex justify-center">
        <Wrapper>
          <PageTitle
            path="/tools/id-generator"
            heading={t("tools.id_generator.heading")}
            description={t("tools.id_generator.description")}
          />
          <div className="w-full flex flex-col md:flex-row-reverse md:items-start gap-4">
            <div className="w-full p-4 flex flex-col gap-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <FieldBlock
                label={t("tools.id_generator.format_label")}
                text={t("tools.id_generator.format_text")}
                select
                value={options.type}
                onChange={(e) =>
                  setOptions({ ...options, type: e.target.value })
                }
                options={[
                  {
                    value: "alphanumeric",
                    label: t("tools.id_generator.format_options.alphanumeric"),
                  },
                  {
                    value: "numeric",
                    label: t("tools.id_generator.format_options.numeric"),
                  },
                  {
                    value: "letters",
                    label: t("tools.id_generator.format_options.letters"),
                  },
                  {
                    value: "uuid",
                    label: t("tools.id_generator.format_options.uuid"),
                  },
                ]}
              />
              <FieldBlock
                label={t("tools.id_generator.length_label")}
                text={t("tools.id_generator.length_text")}
                range
                id="length"
                name="length"
                min={12}
                max={30}
                step={1}
                value={options.length}
                onChange={(e) =>
                  setOptions({ ...options, length: Number(e.target.value) })
                }
                disabled={options.type === "uuid"}
              />
              <div className="w-full flex gap-2">
                <FieldBlock
                  label={t("tools.id_generator.prefix_label")}
                  text={t("tools.id_generator.prefix_text")}
                  placeholder={t("tools.id_generator.prefix_placeholder")}
                  value={options.prefix}
                  onChange={(e) =>
                    setOptions({ ...options, prefix: e.target.value })
                  }
                />
                <FieldBlock
                  label={t("tools.id_generator.suffix_label")}
                  text={t("tools.id_generator.suffix_text")}
                  placeholder={t("tools.id_generator.suffix_placeholder")}
                  value={options.suffix}
                  onChange={(e) =>
                    setOptions({ ...options, suffix: e.target.value })
                  }
                />
              </div>
              <SmartButton variant="primary" full onClick={handleGenerate}>
                {t("tools.button.id_generate")}
              </SmartButton>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="w-full p-4 flex flex-col gap-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <FieldBlock
                  label={t("tools.id_generator.result_label")}
                  text={t("tools.id_generator.result_text")}
                  value={generatedID}
                  readOnly
                />
                <div className="w-full flex items-center justify-end">
                  <SmartButton variant="gray" onClick={copyToClipboard}>
                    {copied ? t("tools.button.copied") : t("tools.button.copy")}
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
