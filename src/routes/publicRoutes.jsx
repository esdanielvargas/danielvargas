import { Navigate } from "react-router-dom";
import { Main } from "../components";
import { LocaleWrapper } from "../components/LocaleWrapper";
import { Checkout, Layout } from "../layouts";
import {
  About,
  Contact,
  Cookies,
  CurrencyConverter,
  HirePlan,
  Home,
  IDGenerator,
  LegalPage,
  NoFound,
  Plans,
  Privacy,
  Projects,
  ProjectPage,
  Services,
  Terms,
  ToolsPage,
  UTMGenerator,
  Resume,
  Sitemap,
  BMICalculator,
} from "../pages";

export const publicRoutes = [
  {
    path: "/",
    element: <Navigate to="/es" replace />,
  },
  {
    path: "/:locale",
    element: <LocaleWrapper />,
    children: [
      {
        element: <Layout />,
        children: [
          { path: "", element: <Home /> },
          { path: "services", element: <Services /> },
          { path: "services/:path", element: <Services /> },
          { path: "plans", element: <Plans /> },
          { path: "plans/:path", element: <Plans /> },
          { path: "projects", element: <Projects /> },
          { path: "projects/:path", element: <ProjectPage /> },
          { path: "contact", element: <Contact /> },
          { path: "about", element: <About /> },
          { path: "tools", element: <ToolsPage /> },
          { path: "tools/utm-generator", element: <UTMGenerator /> },
          { path: "tools/id-generator", element: <IDGenerator /> },
          { path: "tools/currency-converter", element: <CurrencyConverter /> },
          { path: "tools/bmi-calculator", element: <BMICalculator /> },
          { path: "legal", element: <LegalPage /> },
          { path: "legal/terms", element: <Terms /> },
          { path: "legal/privacy", element: <Privacy /> },
          { path: "legal/cookies", element: <Cookies /> },
          { path: "sitemap", element: <Sitemap /> },
          { path: "*", element: <NoFound /> },
        ],
      },
    ],
  },
  {
    element: <Checkout />,
    children: [{ path: "checkout/:path", element: <HirePlan /> }],
  },
  {
    element: <Main />,
    children: [{ path: "resume", element: <Resume /> }],
  },
];
