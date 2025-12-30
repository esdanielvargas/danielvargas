import { useRoutes } from "react-router-dom";
import { publicRoutes } from "./publicRoutes";
import { privateRoutes } from "./privateRoutes";

export default function AppRoutes() {
  return useRoutes([...publicRoutes, ...privateRoutes]);
}
