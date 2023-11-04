import { publicRoutes } from "./publicRoute";
import { normalRoutes } from "./normalRoute";
//hook
import { useRoutes } from "react-router-dom";
export const AppRoutes = () => {
  const element = useRoutes([...normalRoutes, ...publicRoutes]);
  return <> {element}</>;
};
