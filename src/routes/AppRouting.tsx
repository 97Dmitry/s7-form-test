import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import { Avia, Info } from "pages";
import { AppRoutes } from "constants/routes";

const router = createBrowserRouter([
  {
    path: AppRoutes.MAIN,
    element: <Avia />,
  },
  {
    path: AppRoutes.INFO,
    element: <Info />,
  },
  { path: "*", element: <Navigate to={AppRoutes.MAIN} /> },
]);

const AppRouting = () => {
  return <RouterProvider router={router} />;
};

export default AppRouting;
