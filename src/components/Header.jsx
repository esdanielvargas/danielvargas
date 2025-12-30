import { Link } from "react-router-dom";
import NavMenu from "./NavMenu";
import { BadgeDollarSign, DollarSign, Euro, Languages } from "lucide-react";
import { useLang } from "../context/LangContext";
import { useMenu } from "../context/MenuContext";
import { useEffect, useRef, useState } from "react";
import LanguageDropdown from "./LanguageDropdown";
import FalseHeader from "./FalseHeader";

export default function Header({ menuRef }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const { lang, setLang, toggleLang } = useLang();
  const { menu, setMenu, toggleMenu } = useMenu();

  const langDropdownRef = useRef(null);
  const langButtonRef = useRef(null);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      const target = event.target;

      // Cerrar selección de idioma si se hace clic fuera
      if (
        lang &&
        langDropdownRef.current &&
        langButtonRef.current &&
        !langDropdownRef.current.contains(target) &&
        !langButtonRef.current.contains(target)
      ) {
        setLang(false);
      }

      // Cerrar menú si se hace clic fuera
      if (
        menu &&
        menuRef.current &&
        menuButtonRef.current &&
        !menuRef.current.contains(target) &&
        !menuButtonRef.current.contains(target)
      ) {
        setMenu(false);
      }
    }
    // Agregar evento de clic al documento
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [lang, menu, setLang, setMenu, menuRef]);

  return (
    <>
      <header className="w-full min-h-22.5 z-60 fixed top-0 flex items-center justify-center transition-all duration-300 ease-outtext-neutral-950 dark:text-neutral-50">
        <div className="w-full max-w-300 mx-4 flex items-center justify-between">
          <div className="size-full flex items-center justify-start">
            <Link to="/" className="flex items-center justify-start">
              <div className="font-bold text-xl font-sans min-w-max text-neutral-950 dark:text-neutral-50">
                DANIEL VARGAS
              </div>
            </Link>
          </div>
          <div
            className={`size-full flex items-center justify-center ${
              scrolled ? "text-neutral-950 dark:text-neutral-50" : ""
            }`}
          >
            <NavMenu />
          </div>
          <div className="size-full flex items-center justify-end">
            <div className="flex items-center justify-end gap-2.5">
              <div className="relative" ref={langDropdownRef}>
                <button
                  type="button"
                  ref={langButtonRef}
                  title={
                    lang
                      ? "Cerrar selección de idioma"
                      : "Abrir selección de idioma"
                  }
                  aria-label={
                    lang
                      ? "Cerrar selección de idioma"
                      : "Abrir selección de idioma"
                  }
                  className="size-7.5 cursor-pointer flex items-center justify-center relative text-neutral-950 dark:text-neutral-50"
                  onClick={() => toggleLang()}
                >
                  <Languages size={18} strokeWidth={1.5} />
                </button>
                <LanguageDropdown />
              </div>
              <button
                type="button"
                ref={menuButtonRef}
                title={menu ? "Cerrar menú" : "Abrir menú"}
                aria-label={menu ? "Cerrar menú" : "Abrir menú"}
                className="size-7.5 z-50 cursor-pointer flex flex-col items-center justify-center text-neutral-950 dark:text-neutral-50"
                onClick={() => toggleMenu()}
              >
                <div className="size-4.5 flex flex-col items-end justify-center">
                  <span
                    className={`block w-4.5 h-px bg-neutral-950 dark:bg-neutral-50 transform duration-300 ease-out rounded-xl 
                ${
                  menu
                    ? "-rotate-45 translate-y-px translate-x-px"
                    : "-translate-y-1.5"
                }`}
                  />
                  <span
                    className={`block h-px bg-neutral-950 dark:bg-neutral-50 transform duration-300 ease-out rounded-xl
                ${menu ? "w-0" : "w-3"}`}
                  />
                  <span
                    className={`block w-4.5 h-px bg-neutral-950 dark:bg-neutral-50 transform duration-300 ease-out rounded-xl
                ${
                  menu
                    ? "rotate-45 -translate-y-px translate-x-px"
                    : "translate-y-1.5"
                }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>
      <FalseHeader scrolled={scrolled} />
    </>
  );
}
