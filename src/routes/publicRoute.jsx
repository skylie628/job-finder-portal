import lazyImport from "../utils/lazyImport";
const AuthPage = lazyImport("../pages/ExplorePage");
export const publicRoutes = [
  {
    path: "/auth",
    element: <AuthPage />,
  },
];
