import { Link } from "react-router-dom";
import { Copyright } from "lucide-react";
import { useTranslation } from "react-i18next";
import { getInternal, getPolicies, getPlans, getTools } from "../database";

export default function Footer() {
  const { t } = useTranslation();

  const explore = getInternal(t);
  const plans = getPlans(t);
  const tools = getTools(t);
  const policies = getPolicies(t);

  const socials = [
    {
      name: "PayPal",
      id: "uQKLuxpuoQRWqH",
      url: "https://paypal.me/esdanielvargas",
    },
    {
      name: "Wrap",
      id: "yENUhAWnuaH88c",
      url: "https://app.warp.dev/referral/EP6X5K",
    },
    {
      name: "GitHub",
      id: "",
      url: "https://www.github.com/esdanielvargas",
    },
    {
      name: "LinkedIn",
      id: "BTS6Wk10wfSZTk",
      url: "https://www.linkedin.com/in/esdanielvargas",
    },
    {
      name: "Twitter",
      id: "DL5CvWMHXSLGIx",
      url: "https://www.twitter.com/intent/follow?screen_name=esdanielvargas",
    },
  ];

  return (
    <footer className="w-full flex justify-center bg-neutral-100/20 dark:bg-neutral-950/20 border-y border-neutral-200/75 dark:border-neutral-800/75">
      <div className="w-full max-w-300 mx-4 my-8 space-y-12 overflow-hidden">
        {/* Redes sociales */}
        <div className="flex items-center justify-center flex-wrap gap-3.5 text-xs font-text">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-500 hover:text-neutral-950 active:text-neutral-950 dark:text-neutral-300 dark:hover:text-neutral-50 hover:underline dark:active:text-neutral-50 active:underline"
            >
              {social.name}
            </a>
          ))}
        </div>

        {/* Listas de enlaces */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 gap-y-8 text-xs">
          {/* Explorar */}
          <div className="w-full flex flex-col items-center md:items-start">
            <b className="text-neutral-950 dark:text-neutral-50 font-semibold mb-3">
              <Link to="/" className="active:underline hover:underline">
                {t("common.footer.column.explore")}
              </Link>
            </b>
            <ul className="text-center md:text-start space-y-2 font-text">
              {explore
                .filter((link) => link.show || link.show_header)
                .slice(0, 4)
                .map((link) => (
                  <li
                    key={link.id}
                    className="text-neutral-700 dark:text-neutral-300"
                  >
                    <Link
                      to={link.path}
                      className="active:underline hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          {/* Planes */}
          <div className="w-full flex flex-col items-center md:items-start">
            <b className="text-neutral-950 dark:text-neutral-50 font-semibold mb-3">
              <Link to="/plans" className="active:underline hover:underline">
                {t("common.footer.column.plans")}
              </Link>
            </b>
            <ul className="text-center md:text-start space-y-2 font-text">
              {plans
                .filter((link) => link.show)
                .slice(0, 4)
                .map((link) => (
                  <li
                    key={link.id}
                    className="text-neutral-700 dark:text-neutral-300"
                  >
                    <Link
                      to={`/contact?plan=${link.path}`}
                      className="active:underline hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          {/* Herramientas */}
          <div className="w-full flex flex-col items-center md:items-start">
            <b className="text-neutral-950 dark:text-neutral-50 font-semibold mb-3">
              <Link to="/tools" className="active:underline hover:underline">
                {t("common.footer.column.tools")}
              </Link>
            </b>
            <ul className="text-center md:text-start space-y-2 font-text">
              {tools
                .filter((link) => link.show)
                .slice(0, 4)
                .map((link) => (
                  <li
                    key={link.id}
                    className="text-neutral-700 dark:text-neutral-300"
                  >
                    <Link
                      to={link.pathname + link.path}
                      className="active:underline hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
          {/* Políticas */}
          <div className="w-full flex flex-col items-center md:items-start">
            <b className="text-neutral-950 dark:text-neutral-50 font-semibold mb-3">
              <Link to="/policies" className="active:underline hover:underline">
                {t("common.footer.column.policies")}
              </Link>
            </b>
            <ul className="text-center md:text-start space-y-2 font-text">
              <li className="text-neutral-700 dark:text-neutral-300">
                <Link
                  to="/sitemap"
                  className="active:underline hover:underline"
                >
                  {t("common.footer.links.sitemap")}
                </Link>
              </li>
              {policies
                .filter((link) => link.show)
                .slice(0, 4)
                .map((link) => (
                  <li
                    key={link.id}
                    className="text-neutral-700 dark:text-neutral-300"
                  >
                    <Link
                      to={link.pathname + link.path}
                      className="active:underline hover:underline"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between border-t border-neutral-200/75 dark:border-neutral-800/75 pt-6">
          <div className="w-full flex items-center justify-center md:justify-start">
            <span className="flex items-center gap-0.5 text-xs font-text text-neutral-700 dark:text-neutral-300">
              <Copyright size={12} />
              {t("common.footer.copyright", { year: new Date().getFullYear() })}
            </span>
          </div>
          <div className="w-full flex items-center justify-center md:justify-end gap-2 mt-3 md:mt-0">
            {policies
              .slice(0, 3)
              .filter((link) => link.show)
              .map((link, index) => (
                <Link
                  to={link.path}
                  key={link.id || index}
                  className="text-center md:text-right text-xs font-text text-neutral-700 dark:text-neutral-300 active:underline hover:underline"
                >
                  {link.title}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
