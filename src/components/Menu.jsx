import { useMenu } from "../context/MenuContext";
import { useTranslation } from "react-i18next";
import { getExternal, getInternal } from "../database";
import { Link } from "react-router-dom";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Menu({ menuRef }) {
  const { menu, toggleMenu } = useMenu();

  const { t } = useTranslation();

  const internal = getInternal(t);
  const external = getExternal(t);

  return (
    <div
      ref={menuRef}
      className={`w-full md:w-75 h-screen z-58 fixed top-0 flex flex-col bg-neutral-50/75 dark:bg-neutral-950/50 backdrop-blur-xl md:border-l border-neutral-200 dark:border-neutral-900 transition-all duration-300 ease-out ${
        menu ? "right-0" : "-right-full"
      }`}
    >
      <div className="w-full min-h-22.5 border-b border-neutral-900"></div>
      <nav className="size-full flex flex-col">
        {/* Enlaces internos */}
        <ul className="w-full flex flex-col">
          {internal
            .filter((link) => link.show_menu)
            .map((link) => (
              <li
                key={link.id}
                onClick={() => toggleMenu()}
                className="w-full h-17.5 cursor-pointer border-b border-neutral-200 dark:border-neutral-900"
              >
                <Link
                  to={link.path}
                  className="size-full flex items-center justify-center transition-all duration-300 ease-out text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 active:underline hover:underline"
                >
                  <div className="w-full mx-5 md:mx-8 flex items-center justify-between select-none">
                    <span className="font-normal text-sm">
                      {link.title}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
        </ul>
        {/* Enlaces externos */}
        <ul className="w-full flex flex-col">
          {external
            .filter((link) => link.show_menu)
            .map((link) => (
              <li
                key={link.id}
                onClick={() => toggleMenu()}
                className="w-full h-17.5 cursor-pointer border-b border-neutral-200 dark:border-neutral-900"
              >
                <a
                  href={link.path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="size-full flex items-center justify-center duration-300 ease-out text-neutral-600 hover:text-neutral-950 dark:text-neutral-400 dark:hover:text-neutral-50 active:underline hover:underline"
                >
                  <div className="w-full mx-5 md:mx-8 flex items-center justify-between select-none">
                    <span className="font-normal text-sm">
                      {link.title}
                    </span>
                    <SquareArrowOutUpRight
                      size={14}
                      strokeWidth={1.5}
                      className="pointer-events-none"
                    />
                  </div>
                </a>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
}
