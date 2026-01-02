import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { getInternal } from "../database";

export default function NavMenu() {
  const { t } = useTranslation();
  const internal = getInternal(t);

  return (
    <nav className="size-full h-22.5 hidden md:flex items-center justify-center">
      <ul className="size-full flex items-center justify-center gap-5">
        {internal
          .filter((link) => link.show_header)
          .map((link) => (
            <li
              key={link.id}
              className="h-full flex items-center justify-center"
            >
              <Link
                to={link.path}
                className="flex items-center justify-center hover:underline focus-visible:outline-none focus-visible:underline"
              >
                <span className="min-w-max font-normal text-sm md:text-base font-text select-none">
                  {link.title}
                </span>
              </Link>
            </li>
          ))}
      </ul>
    </nav>
  );
}
