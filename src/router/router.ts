import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Module from "../screens/Default";
import ProductPage from "../screens/Product";
import UserLoginForm from "../screens/Forms/LoginForm";
import { HomePage } from "../screens/LandingPage";

const appRoutes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: "/module",
          element: <Module />,
        },
        {
          path: "/products",
          element: <ProductPage />,
        },
        {
          path: "/login",
          element: <UserLoginForm />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default appRoutes;
