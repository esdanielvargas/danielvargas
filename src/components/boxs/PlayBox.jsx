import { useTranslation } from "react-i18next";
import { SmartButton } from "../buttons";

export default function PlayBox(props) {
  const { t } = useTranslation();

  const {
    icon,
    title,
    caption,
    path,
    pathname,
    variant = "more",
  } = props;

  const variants = {
    more: t("common.action.view_more"),
    tool: t("common.action.try_tool"),
    legal: t("common.action.read_policy"),
  };

  return (
    <div className="w-full p-4 space-y-2 rounded-lg border border-neutral-200/75 dark:border-neutral-800/75 bg-neutral-100/75 dark:bg-neutral-900/50 overflow-hidden shadow-sm hover:shadow-md active:shadow-md transition-shadow cursor-default">
      <div className="flex items-center gap-2.5">
        {icon && (
          <div className="size-9 min-w-9 flex items-center justify-center rounded-full bg-neutral-200 dark:bg-neutral-800 text-neutral-950 dark:text-neutral-50 text-lg text-shadow-sm">
            {icon}
          </div>
        )}
        <h2
          className="font-semibold text-lg text-neutral-950 dark:text-neutral-50 line-clamp-1"
          title={title}
        >
          {title || "Título"}
        </h2>
      </div>
      <p
        className="font-normal text-sm font-text line-clamp-2 text-neutral-500 dark:text-neutral-300"
        title={caption}
      >
        {caption ||
          "Lorem ipsum dolor sit amet consectetur, adipisicing elite. Nostrum reiciendis to maxime aliquam, enim ex animi! Dolorem et distinctio deleniti placeat natus vero! At repellendus error corrupti ad accusamus dolor officia, fugit veritatis, ipsa natus tempore aliquam quis facere fuga magni."}
      </p>
      <div className="w-full pt-2 flex items-center justify-center">
        <SmartButton variant="primary" to={pathname + path} full>
          {variants[variant]}
        </SmartButton>
      </div>
    </div>
  );
}
