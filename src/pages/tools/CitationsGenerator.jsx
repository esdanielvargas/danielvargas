import { useTranslation } from "react-i18next";
import { FieldBlock, PageTitle, Wrapper } from "../components";
import { SmartButton } from "../components/buttons";
import { useState } from "react";

export default function CitationsGenerator() {
  const { t } = useTranslation();

  const [author, setAuthor] = useState("");
  const [year, setYear] = useState(new Date().getFullYear());
  const [page, setPage] = useState("");
  const [quote, setQuote] = useState("");
  const [generated, setGenerated] = useState({
    narrative: "",
    parenthetical: "",
    blockquote: "",
  });

  const [connector, setConnector] = useState("afirma");

  // const connectors = [
  //   "comenta",
  //   "describe",
  //   "indica",
  //   "expone",
  // ];

  const generateCitations = () => {
    const shortQuote = quote.trim();
    const longQuote = quote.trim();
    const isLong = shortQuote.split(" ").length >= 40;

    setGenerated({
      narrative: isLong
        ? ""
        : `Según ${author} (${year}), “${shortQuote}” ${
            page ? `, (p. ${page})` : ``
          }.`,
      parenthetical: isLong
        ? ""
        : `“${shortQuote}” (${author}, ${year}${page ? `, p. ${page}` : ``}).`,
      blockquote: isLong
        ? `${author} (${year}):\n\n${longQuote}\n\n(p. ${page})`
        : "",
      narrativaLong: isLong ? (
        <div className="w-full flex flex-col leading-7">
          <p className="indent-12 text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis reprehenderit sed autem laboriosam facilis.
            <span className="text-white">{` Según ${author} (${year}): `}</span>
          </p>
          <p className="ml-12">{`${longQuote} (p. ${page})`}</p>
          <p className="indent-12 text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptatibus libero eveniet vel ipsa, porro voluptas amet soluta
            voluptate tempora! Neque impedit iusto libero!
          </p>
        </div>
      ) : (
        ""
      ),
      parentheticalLong: isLong ? (
        <div className="w-full flex flex-col leading-7">
          <p className="indent-12 text-neutral-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis reprehenderit sed autem laboriosam facilis.
            <span className="hidden text-white">{` Según ${author} (${year}): `}</span>
          </p>
          <p className="ml-12">{`${longQuote}. (${author}, ${year}, p. ${page})`}</p>
          <p className="indent-12 text-neutral-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
            voluptatibus libero eveniet vel ipsa, porro voluptas amet soluta
            voluptate tempora! Neque impedit iusto libero!
          </p>
        </div>
      ) : (
        ","
      ),
    });
  };

  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generateCitations);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <>
      <div className="w-full min-h-22.5 sticky top-px border-b border-neutral-900" />
      <section className="w-full min-h-screen flex justify-center">
        <Wrapper>
          <PageTitle
            path="/tools/citations"
            title={t("tools.citations.title")}
            short={t("tools.citations.short_title")}
            description={t("tools.citations.description")}
          />
          <div className="w-full flex flex-col-reverse md:flex-row md:items-start gap-4">
            <div className="w-full p-4 flex flex-col gap-4 rounded-lg border border-neutral-800 bg-neutral-900">
              {generated.narrative && (
                <>
                  <FieldBlock
                    label="Cita narrativa"
                    text="Cita corta de menos de 40 palabras."
                    value={generated.narrative}
                    readOnly
                  />
                  <div className="flex items-center justify-end gap-3">
                    <SmartButton variant="gray" onClick={copyToClipboard}>
                      {copied ? "Copiado" : "Copiar"}
                    </SmartButton>
                  </div>
                  <hr className="text-neutral-800" />
                </>
              )}
              {generated.parenthetical && (
                <>
                  <FieldBlock
                    label="Cita parentética"
                    text="Cita corta de menos de 40 palabras."
                    value={generated.parenthetical}
                    readOnly
                  />
                  <div className="flex items-center justify-end gap-3">
                    <SmartButton variant="gray" onClick={copyToClipboard}>
                      {copied ? "Copiado" : "Copiar"}
                    </SmartButton>
                  </div>
                </>
              )}
              {/* {generated.blockquote && (
              )} */}
              {/* <>
                <FieldBlock
                  label="Cita en bloque"
                  text="Más de 40 palabras"
                  value={generated.blockquote}
                  readOnly
                />
                <div className="flex items-center justify-end gap-3">
                  <SmartButton variant="gray" onClick={copyToClipboard}>
                    {copied ? "Copiado" : "Copiar"}
                  </SmartButton>
                </div>
                </> */}
              {/* {generated.narrativaLong && (
              )} */}
              <>
                <FieldBlock
                  label="Cita narrativa"
                  text="Cita larga de más de 40 palabras."
                  value={generated.narrativaLong}
                  readOnly
                />
                <div className="flex items-center justify-end gap-3">
                  <SmartButton variant="gray" onClick={copyToClipboard}>
                    {copied ? "Copiado" : "Copiar"}
                  </SmartButton>
                </div>
                <hr className="text-neutral-800" />
              </>
              <>
                <FieldBlock
                  label="Cita paréntetical"
                  text="Cita larga de más de 40 palabras."
                  value={generated.parentheticalLong}
                  readOnly
                />
                <div className="flex items-center justify-end gap-3">
                  <SmartButton variant="gray" onClick={copyToClipboard}>
                    {copied ? "Copiado" : "Copiar"}
                  </SmartButton>
                </div>
              </>
            </div>
            <div className="w-full p-4 flex flex-col gap-4 rounded-lg border border-neutral-800 bg-neutral-900">
              <FieldBlock
                label="Apellido del autor"
                value={author}
                placeholder="Vargas"
                onChange={(e) => setAuthor(e.target.value)}
              />
              <FieldBlock
                label="Año"
                value={year}
                placeholder="2001"
                onChange={(e) => setYear(e.target.value)}
              />
              <FieldBlock
                label="Verbo de cita narrativa"
                select
                value={connector}
                onChange={(e) => setConnector(e.target.value)}
                options={[
                  { value: "afirma", label: "Afirma" },
                  { value: "sostiene", label: "Sostiene" },
                  { value: "propone", label: "Propone" },
                  { value: "explica", label: "Explica" },
                  { value: "argumenta", label: "Argumenta" },
                  { value: "señala", label: "Señala" },
                  { value: "comenta", label: "Comenta" },
                  { value: "describe", label: "Describe" },
                  { value: "indica", label: "Indica" },
                  { value: "expone", label: "Expone" },
                ]}
              />

              <FieldBlock
                label="Número de página"
                value={page}
                placeholder="45"
                onChange={(e) => setPage(e.target.value)}
              />
              <FieldBlock
                label="Texto de la cita"
                textarea
                rows={8}
                value={quote}
                placeholder="Texto citado aquí..."
                onChange={(e) => setQuote(e.target.value)}
              />
              <SmartButton variant="primary" onClick={generateCitations}>
                Generar cita
              </SmartButton>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
