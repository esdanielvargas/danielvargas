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
  getLegal,
  getPlans,
  getProjects,
  getServices,
  getTools,
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
  const legal = getLegal(t);

  const categories = [
    {
      title: "Inicio",
      path: "/",
      icon: <Home className="w-4 h-4" />,
      items: internal,
    },
    {
      title: "Servicios",
      path: "/services",
      icon: <Briefcase className="w-4 h-4" />,
      items: services,
    },
    {
      title: "Planes",
      path: "/plans",
      icon: <Layers className="w-4 h-4" />,
      items: plans,
    },
    {
      title: "Proyectos",
      path: "/projects",
      icon: <FileText className="w-4 h-4" />,
      items: projects,
    },
    {
      title: "Herramientas",
      path: "/tools",
      icon: <Wrench className="w-4 h-4" />,
      items: tools,
    },
    {
      title: "Políticas",
      path: "/legal",
      icon: <Shield className="w-4 h-4" />,
      items: legal,
    },
  ];

  return (
    <>
      <PageMeta
        path="sitemap"
        title="Mapa del Sitio Web de Daniel Vargas"
        description="lorem lorem lorem"
      />
      <FalseHeader page />
      <Section>
        <Wrapper>
          <PageTitle
            header="Mapa del Sitio Web"
            description="lorem lorem lorem"
          />
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-md p-4 transition hover:shadow-lg"
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
                    .filter((item) => item.show)
                    .sort((a, b) => b.title - a.title)
                    .map((item) => (
                      <li key={item.id}>
                        <Link
                          to={item.pathname + item.path}
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
