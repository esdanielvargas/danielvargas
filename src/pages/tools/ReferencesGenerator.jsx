import { useTranslation } from "react-i18next";
import { FieldBlock, PageTitle, Wrapper } from "../components";
import { useFieldArray, useForm } from "react-hook-form";
import { Copy, Trash2 } from "lucide-react";

export default function ReferencesGenerator() {
  const { t } = useTranslation();

  const { register, watch, control } = useForm();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "authors",
  });

  const authors = watch("authors");
  const year = watch("year") || "s.f.";
  const title = watch("title") || "Título del artículo en cursiva";
  const edition = watch("edition") || "edición";
  const editorial = watch("editorial") || "Editorial";
  const site = watch("site") || "Nombre del sitio web";
  const url = watch("url") || "https://danielvargas.dev/tools/referencias";

  const formatAuthors = () => {
    if (!authors || authors.length === 0) return "Apellido, A. ";
    return authors
      .sort((a, b) => b.lastName - a.lastName)
      .map((a) => `${a.lastName}, ${a.firstName.charAt(0)}.`)
      .join("y ");
  };

  return (
    <>
      <div className="w-full min-h-22.5 sticky top-px border-b border-neutral-900" />
      <section className="w-full min-h-screen flex justify-center">
        <Wrapper>
          <PageTitle
            path="/tools/references"
            title={t("tools.references.title")}
            description={t("tools.references.description")}
          />
          <div className="w-full flex flex-col-reverse md:flex-row md:items-start gap-4">
            <div className="w-full flex flex-col gap-6">
              <div className="w-full p-4 flex flex-col gap-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <div className="w-full flex flex-col gap-3.5">
                  <div className="w-full flex justify-between">
                    <h2 className="font-semibold text-[16px] font-sans overflow-hidden line-clamp-1">
                      Forma básica para referenciar libros
                    </h2>
                    <button className="size-[30px] min-w-[30px] cursor-pointer flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-800/50">
                      <Copy size={18} />
                    </button>
                  </div>
                  <div className="w-full">
                    <p
                      className=" text-neutral-300"
                      style={{ textIndent: "-1.27cm", paddingLeft: "1.27cm" }}
                    >
                      {`${formatAuthors()}
                       (${year || "s.f."}). `}
                      <i>{title || "Título en cursiva"}</i>
                      {` (${edition || "edición"}). ${editorial}. `}
                      <span className="text-sky-500 underline">{url}</span>
                    </p>
                  </div>
                </div>
                <div className="w-full border-b border-neutral-800" />
                {/*  */}
                <h2 className="hidden text-white font-semibold text-lg mb-2">
                  {`Cita textuales`}
                </h2>
                <p className="hidden text-neutral-300">
                  ({formatAuthors().split(",")[0]}, {year})
                </p>
                <div className="hidden my-4 border-b border-neutral-800"></div>
                <h2 className="hidden text-white font-semibold text-lg mb-2">
                  {`Cita parafraseadas`}
                </h2>
                <p className="hidden text-neutral-300">
                  ({formatAuthors().split(",")[0]}, {year})
                </p>
                <div className="hidden border-b border-neutral-800"></div>
                <h2 className="text-white font-semibold text-lg mb-2">
                  {`Referencia Bibliográfica (APA)`}
                </h2>
                <p className="text-neutral-300">
                  {formatAuthors()} ({year}). <i>{title}</i>. {site}.{" "}
                  <span className="text-sky-500 underline">{url}</span>
                </p>
                <div className="border-b border-neutral-800"></div>
                <h2 className="text-white font-semibold text-lg mb-2">
                  Sitio web con contenido estático
                </h2>
                <p className="text-neutral-300">
                  {formatAuthors()} ({year}). <i>{title}</i>. {site}.{" "}
                  <span className="text-sky-500 underline">{url}</span>
                </p>
                <div className="border-b border-neutral-800"></div>
                <h2 className="text-white font-semibold text-lg mb-2">
                  Sitio web con actualización frecuente
                </h2>
                <p className="text-neutral-300">
                  {formatAuthors()} ({year}). <i>{title}</i>. {site}. Recuperado
                  el [día] de [mes] del [año] de{" "}
                  <span className="text-sky-500 underline">{url}</span>
                </p>
                <div className="w-full h-[1px] bg-neutral-800"></div>
                <div
                  className="w-full flex flex-col gap-[14px]"
                  // style={{ backgroundColor: "steelblue" }}
                >
                  <div className="w-full flex justify-between">
                    <h2 className="font-semibold text-[16px] font-sans overflow-hidden line-clamp-1">
                      Sitio web con contenido estático
                    </h2>
                    <button className="size-[30px] min-w-[30px] cursor-pointer flex items-center justify-center rounded-md border border-neutral-800 bg-neutral-800/50">
                      <Copy size={18} />
                    </button>
                  </div>
                  <div className="w-full">
                    <p className="text-neutral-300">
                      {`${formatAuthors()}
                      . (${year || "s.f."}). `}
                      <i>{title}</i>
                      {`. `}
                      {site}.{" "}
                      <span className="text-sky-500 underline">{url}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col gap-4">
              <div className="w-full p-4 flex flex-col gap-4 rounded-xl bg-neutral-900 border border-neutral-800">
                <h2 className="font-semibold text-white text-[20px]">
                  Información del documento
                </h2>
                {fields.map((field, index) => (
                  <div key={field.id} className="flex gap-2 items-end">
                    <FieldBlock
                      label={`Nombre del autor ${index + 1}`}
                      placeholder="Daniel"
                      id={`authors.${index}.firstName`}
                      {...register(`authors.${index}.firstName`)}
                    />
                    <FieldBlock
                      label={`Apellido(s) del autor ${index + 1}`}
                      placeholder="Vargas"
                      id={`authors.${index}.lastName`}
                      {...register(`authors.${index}.lastName`)}
                    />
                    <button
                      onClick={() => remove(index)}
                      className="size-[30px] min-w-[30px] flex items-center justify-center rounded-lg text-red-500 border cursor-pointer hover:underline mb-[5px]"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
                <button
                  type="button"
                  onClick={() => append({ firstName: "", lastName: "" })}
                  className="h-[40px] rounded-lg bg-neutral-50 font-semibold text-neutral-950 hover:underline cursor-pointer"
                >
                  Añadir a un nuevo autor
                </button>
                <FieldBlock
                  label="Año de Publicación"
                  id="year"
                  placeholder="2024"
                  {...register("year")}
                />
                <FieldBlock
                  label="Título del Artículo"
                  id="title"
                  placeholder="Título del artículo en cursiva"
                  {...register("title")}
                />
                <FieldBlock
                  label="Nombre del Sitio Web o Editorial"
                  id="site"
                  placeholder="Nombre del sitio"
                  {...register("site")}
                />
                <FieldBlock
                  label="Enlace del Artículo"
                  id="url"
                  placeholder="https://blog.danielvargas.dev/articles/path"
                  {...register("url")}
                />
              </div>
            </div>
          </div>
        </Wrapper>
      </section>
    </>
  );
}
