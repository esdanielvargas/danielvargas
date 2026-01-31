import { Main } from "../components";
import { Checkout, Layout } from "../layouts";
import {
  About,
  Contact,
  Cookies,
  CurrencyConverter,
  HirePlan,
  Home,
  IDGenerator,
  PoliciesPage,
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
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/services", element: <Services /> },
      { path: "/services/:path", element: <Services /> },
      { path: "/plans", element: <Plans /> },
      { path: "/plans/:path", element: <Plans /> },
      { path: "/projects", element: <Projects /> },
      { path: "/projects/:path", element: <ProjectPage /> },
      { path: "/contact", element: <Contact /> },
      { path: "/about", element: <About /> },
      { path: "/tools", element: <ToolsPage /> },
      { path: "/tools/utm-generator", element: <UTMGenerator /> },
      { path: "/tools/id-generator", element: <IDGenerator /> },
      { path: "/tools/currency-converter", element: <CurrencyConverter /> },
      { path: "/tools/bmi-calculator", element: <BMICalculator /> },
      { path: "/policies", element: <PoliciesPage /> },
      { path: "/policies/terms", element: <Terms /> },
      { path: "/policies/privacy", element: <Privacy /> },
      { path: "/policies/cookies", element: <Cookies /> },
      { path: "/sitemap", element: <Sitemap /> },
      { path: "*", element: <NoFound /> },
    ],
  },
  {
    element: <Checkout />,
    children: [{ path: "/checkout/:path", element: <HirePlan /> }],
  },
  {
    element: <Main />,
    children: [
      { path: "/resume", element: <Resume /> },
      { path: "/about/resume", element: <Resume /> },
    ],
  },
];
