import MainLayout from "../components/Layout/MainLayout";
import { Suspense } from "react";
import { Outlet, Navigate } from "react-router-dom";
import lazyImport from "../utils/lazyImport";
const HomePage = lazyImport("../pages/HomePage");
const App = () => {
  return (
    <MainLayout>
      <Suspense
        fallback={
          <div className="h-full w-full flex items-center justify-center">
            waiting....
          </div>
        }
      >
        <Outlet />
      </Suspense>
    </MainLayout>
  );
};
export const normalRoutes = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Navigate to="/home" /> },
      { path: "/home", element: <HomePage /> },
    ],
  },
];
