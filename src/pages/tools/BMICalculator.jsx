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

export default function BMICalculator() {
  const { t } = useTranslation();

  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) return;

    const heightInMeters = height / 100; // altura en cm → m
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(1);
    setBmi(bmiValue);

    // Clasificación IMC
    let cat = "";
    if (bmiValue < 18.5) cat = t("tools.bmi.categories.underweight");
    else if (bmiValue < 25) cat = t("tools.bmi.categories.normal");
    else if (bmiValue < 30) cat = t("tools.bmi.categories.overweight");
    else cat = t("tools.bmi.categories.obese");

    setCategory(cat);
  };

  return (
    <>
      <PageMeta
        path="tools/bmi-calculator"
        title={t("tools.bmi.title")}
        caption={t("tools.bmi.caption")}
      />
      <FalseHeader page />
      <section className="w-full flex justify-center">
        <Wrapper>
          <PageTitle
            path="/tools/bmi-calculator"
            heading={t("tools.bmi.heading")}
            caption={t("tools.bmi.caption")}
          />
          <div className="w-full flex flex-col md:flex-row-reverse md:items-start gap-4">
            {/* Panel izquierdo: inputs */}
            <div className="w-full p-4 flex flex-col gap-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
              <FieldBlock
                label={t("tools.bmi.weight_label")}
                text={t("tools.bmi.weight_text")}
                type="number"
                placeholder="70"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
              />
              <FieldBlock
                label={t("tools.bmi.height_label")}
                text={t("tools.bmi.height_text")}
                type="number"
                placeholder="170"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
              />
              <SmartButton variant="primary" full onClick={calculateBMI}>
                {t("tools.button.calculate")}
              </SmartButton>
            </div>

            {/* Panel derecho: resultado */}
            <div className="w-full flex flex-col gap-4">
              <div className="w-full p-4 flex flex-col gap-4 rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
                <FieldBlock
                  label={t("tools.bmi.result_label")}
                  text={t("tools.bmi.result_text")}
                  placeholder={
                    bmi === null ? "24.2 (Peso normal)" : `${bmi} (${category})`
                  }
                  readOnly
                />
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
