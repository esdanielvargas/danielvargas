import { useTranslation } from "react-i18next";
import {
  FalseHeader,
  PageMeta,
  PageTitle,
  Section,
  Wrapper,
} from "../components";
import {
  getInternal,
  getServices,
  getPlans,
  getProjects,
  getTools,
  getPolicies,
} from "../database";
import { Link } from "react-router-dom";
import {
  Briefcase,
  FileText,
  Home,
  Layers,
  Shield,
  Wrench,
} from "lucide-react";

export default function Sitemap() {
  const { t } = useTranslation();

  const internal = getInternal(t);
  const services = getServices(t);
  const plans = getPlans(t);
  const projects = getProjects(t);
  const tools = getTools(t);
  const policies = getPolicies(t);

  const categories = [
    {
      title: "Inicio",
      pathname: "/",
      path: "/",
      icon: <Home className="w-4 h-4" />,
      items: internal,
    },
    {
      title: "Servicios",
      pathname: "/contact?service=",
      path: "/services",
      icon: <Briefcase className="w-4 h-4" />,
      items: services,
    },
    {
      title: "Planes",
      pathname: "/contact?plan=",
      path: "/plans",
      icon: <Layers className="w-4 h-4" />,
      items: plans,
    },
    {
      title: "Proyectos",
      pathname: "/projects/",
      path: "/projects",
      icon: <FileText className="w-4 h-4" />,
      items: projects,
    },
    {
      title: "Herramientas",
      pathname: "/tools/",
      path: "/tools",
      icon: <Wrench className="w-4 h-4" />,
      items: tools,
    },
    {
      title: "Políticas",
      pathname: "/policies/",
      path: "/policies",
      icon: <Shield className="w-4 h-4" />,
      items: policies,
    },
  ];

  return (
    <>
      <PageMeta
        path="sitemap"
        title={t("pages.sitemap.title")}
        caption={t("pages.sitemap.caption")}
      />
      <FalseHeader page />
      <Section>
        <Wrapper>
          <PageTitle
            heading={t("pages.sitemap.heading")}
            caption={t("pages.sitemap.caption")}
          />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-neutral-50 dark:bg-neutral-900 rounded-xl border border-neutral-200 dark:border-neutral-800 shadow-md p-4 transition hover:shadow-lg"
              >
                <h3 className="flex items-center gap-2 font-semibold font-sans mb-3">
                  {cat.icon}
                  <Link
                    to={cat.path}
                    className="font-semibold font-sans transition hover:underline"
                  >
                    {cat.title}
                  </Link>
                </h3>
                <ul className="space-y-1">
                  {cat.items
                    .filter((item) => item.show || item.show_header || item.show_menu)
                    .sort((a, b) => b.title - a.title)
                    .map((item) => (
                      <li key={item.id}>
                        <Link
                          to={cat.pathname + item.path}
                          className="text-sm font-text text-neutral-700 dark:text-neutral-300 transition hover:underline"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
          </div>
        </Wrapper>
      </Section>
    </>
  );
}
