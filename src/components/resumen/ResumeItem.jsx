export default function ResumeItem(props) {
  const { title, company, locale, startDate, endDate, caption } = props;
  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full flex flex-col">
        <div className="w-full flex items-center justify-start">
          <div className="font-black text-base font-grotesk">
            {title || "Título"}
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between text-sm font-grotesk text-neutral-700 dark:text-neutral-300">
          {(company || locale) && (
            <div className="w-full min-w-max flex flex-col md:flex-row items-start justify-start">
              {company && (company || "Empresa o institución")}
              <span className="hidden md:flex ml-1">
                {company && locale && " — "}
                {locale && (locale || "Ubicación")}
              </span>
              <span className="flex md:hidden text-neutral-300/75">
                {locale && (locale || "Ubicación")}
              </span>
            </div>
          )}
          {(startDate || endDate) && (
            <div className="w-full mt-1 flex items-center justify-start md:justify-end">
              {startDate && (startDate || "Fecha inicial")}
              {startDate && endDate && " — "}
              {endDate && (endDate || "Fecha final")}
            </div>
          )}
        </div>
      </div>
      {caption && (
        <div className="w-full text-sm/6 font-grotesk text-justify text-neutral-600 dark:text-neutral-300">
          {caption ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at adipisci hic enim autem est ipsa? Doloribus, nisi natus eos dolor illum consectetur asperiores atque possimus corrupti consequatur nam quisquam."}
        </div>
      )}
    </div>
  );
}
