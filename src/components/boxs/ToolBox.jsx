import { useTranslation } from "react-i18next";
import { SmartButton } from "../buttons";

export default function ToolBox(props) {
  const { icon, title, description, path } = props;
  const { t } = useTranslation();

  return (
    <div className="w-full p-4 flex flex-col gap-4 rounded-lg border dark:border-neutral-800 dark:bg-neutral-900">
      <div className="flex items-center gap-3">
        {icon && (
          <div className="size-10 min-w-10 flex items-center justify-center rounded-full bg-neutral-800 text-white text-xl">
            {icon}
          </div>
        )}
        <h2
          className="text-lg font-semibold text-white line-clamp-1"
          title={title}
        >
          {title || "Nombre de la Herramienta"}
        </h2>
      </div>
      {description && (
        <p
          className="text-sm text-neutral-400 line-clamp-2"
          title={description}
        >
          {description}
        </p>
      )}
      <div className="w-full flex items-center justify-center">
        <SmartButton variant="primary" to={path} full>
          {t("tools.action")}
        </SmartButton>
      </div>
    </div>
  );
}
