import { useTranslation } from "react-i18next";
import { ProjectBox, SmartButton } from "../components";
import { getProjects } from "../database";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Projects({ line = false }) {
  const { t } = useTranslation();
  const projects = getProjects();
  const [select, setSelect] = useState("all");

  const categories = [
    {
      show: true,
      value: "all",
      id: "PqhxgqVVafErOZ",
      title: t("plans.all.title"),
    },
    {
      show: true,
      value: "landing",
      id: "RoLF89pKy2lJiL",
      title: t("plans.landing.title"),
    },
    {
      show: true,
      value: "basic",
      id: "mVzScGlJsaNeMd",
      title: t("plans.basic.title"),
    },
    {
      show: true,
      value: "standard",
      id: "demdmKCWXHWs7f",
      title: t("plans.standard.title"),
    },
    {
      show: true,
      value: "professional",
      id: "DiNZrSLoc4SrAJ",
      title: t("plans.professional.title"),
    },
    {
      show: true,
      value: "app",
      id: "pnefUngd5GFnZb",
      title: t("plans.app.title"),
    },
    {
      show: true,
      value: "ecommerce",
      id: "WvgNlnoHmrJQox",
      title: t("plans.ecommerce.title"),
    },
    {
      show: true,
      value: "custom",
      id: "mYtIKOzOL4FIR4",
      title: t("plans.custom.title"),
    },
  ];

  const result =
    select === "all"
      ? projects
      : projects.filter((project) => project.category === select);

  return (
    <section
      className={`w-full py-14 flex items-center justify-center${
        line ? " border-b border-neutral-900" : ""
      }`}
      id="projects"
    >
      <div className="w-full max-w-300 mx-4 space-y-14">
        <div className="w-full flex items-center justify-between">
          <h2 className="text-3xl font-bold select-none">{t("projects.header")}</h2>
          
          <div className="h-8.5 relative hidden items-center justify-center cursor-pointer overflow-hidden rounded-lg bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <select
              value={select}
              name="categories"
              title="Select your currency"
              onChange={(e) => setSelect(e.target.value)}
              className="w-full h-8.5 px-3 pr-9 cursor-pointer text-xs/3.5 font-grotesk select-none appearance-none bg-neutral-100 dark:bg-neutral-900 focus:outline-0"
            >
              {categories
                .filter((item) => item.show)
                .map(({ id, value, title }) => (
                  <option key={id} value={value} title={title}>
                    {title}
                  </option>
                ))}
            </select>
            <ChevronDown
              size={18}
              className="absolute right-2.5 pointer-events-none"
            />
          </div>
        </div>
        {result.length <= 0 && (
          <div className="w-full flex items-center justify-center">
            <div className="py-2.5 px-3 rounded-lg border bg-neutral-900 font-extralight text-xs font-grotesk text-rose-500/85 select-text">
              Aún no hay projectos con esta categoría
            </div>
          </div>
        )}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-2">
          {result.slice(0, 3).map((project) => (
            <ProjectBox key={project.id} {...project} />
          ))}
        </div>
        <div className="w-full flex items-center justify-end gap-2">
          <SmartButton variant="secondary" to="/projects">
            {t("projects.button.more")}
          </SmartButton>
        </div>
      </div>
    </section>
  );
}
