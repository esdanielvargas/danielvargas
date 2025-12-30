export default function ResumeItem(props) {
  const { title, company, locale, startDate, endDate, description } = props;
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center justify-start">
          <div className="font-black text-base font-grotesk">{title || "Título"}</div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between text-sm font-grotesk text-neutral-700 dark:text-neutral-300">
          <div className="w-full min-w-max flex items-center justify-start">
            {company || "Empresa o institución"}
            {" — "}
            {locale || "Ubicación"}
          </div>
          <div className="w-full flex items-center justify-start md:justify-end">
            {startDate || "Fecha inicial"}
            {" — "}
            {endDate || "Fecha final"}
          </div>
        </div>
      </div>
      {description && (
        <div className="w-full text-sm/6 font-grotesk text-justify text-neutral-600 dark:text-neutral-300">
          {description ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at adipisci hic enim autem est ipsa? Doloribus, nisi natus eos dolor illum consectetur asperiores atque possimus corrupti consequatur nam quisquam."}
        </div>
      )}
    </div>
  );
}
