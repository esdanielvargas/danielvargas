import { useTranslation } from "react-i18next";
import {
  FalseHeader,
  FieldBlock,
  PageMeta,
  PageTitle,
  SmartButton,
  Wrapper,
} from "../../components";
import { useState } from "react";
import { convertPrice, exchangeRates } from "../../utils";

export default function CurrencyConverter() {
  const { t } = useTranslation();
  const [price, setPrice] = useState(0);
  const [fromCurrency, setFromCurrency] = useState("USD");
  const [toCurrency, setToCurrency] = useState("EUR");

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(
      convertPrice(price, fromCurrency, toCurrency),
    );
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <PageMeta
        path="tools/currency-converter"
        title={t("tools.currency_converter.title")}
        caption={t("tools.currency_converter.caption")}
      />
      <FalseHeader page />
      <div className="w-full flex justify-center">
        <Wrapper>
          <PageTitle
            path="/tools/currency-converter"
            heading={t("tools.currency_converter.heading")}
            caption={t("tools.currency_converter.caption")}
          />
          <div className="w-full flex flex-col md:flex-row-reverse md:items-start gap-4">
            <div className="w-full p-4 flex flex-col gap-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <FieldBlock
                label={t("tools.currency_converter.quantity")}
                text={t("tools.currency_converter.quantity_text")}
                value={price}
                onChange={(e) => setPrice(parseFloat(e.target.value) || 0)}
              />
              <div className="w-full flex gap-2">
                <FieldBlock
                  label={t("tools.currency_converter.from")}
                  text={t("tools.currency_converter.from_text")}
                  select
                  options={Object.values(exchangeRates).map(
                    ({ code, label, title }) => ({
                      value: code,
                      label: title,
                      title: label,
                    }),
                  )}
                  value={fromCurrency}
                  onChange={(e) => setFromCurrency(e.target.value)}
                />
                <FieldBlock
                  label={t("tools.currency_converter.to")}
                  text={t("tools.currency_converter.to_text")}
                  select
                  options={Object.values(exchangeRates).map(
                    ({ code, label, title }) => ({
                      value: code,
                      label: title,
                      title: label,
                    }),
                  )}
                  value={toCurrency}
                  onChange={(e) => setToCurrency(e.target.value)}
                />
              </div>
              <SmartButton
                onClick={() => {
                  const oldFrom = fromCurrency;
                  setFromCurrency(toCurrency);
                  setToCurrency(oldFrom);
                }}
              >
                {t("tools.button.change")}
              </SmartButton>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="w-full p-4 flex flex-col gap-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <FieldBlock
                  label={t("tools.currency_converter.result")}
                  text={t("tools.currency_converter.result_text")}
                  value={convertPrice(price, fromCurrency, toCurrency)}
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
      </div>
    </>
  );
}
