import { Resume } from "../pages";
import { Main } from "../components";

export const privateRoutes = [
  {
    element: <Main />,
    children: [
      { path: "/about/resume", element: <Resume /> },
    ]
  }
];
