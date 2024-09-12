import { createBrowserRouter } from "react-router-dom";
import { App } from "../App";
import Default from "../screens/Default";
import Product from "../screens/Product";
import LoginForm from "../screens/Forms/LoginForm";
import { LandingPage } from "../screens/LandingPage";
import Dictionary from "../screens/dictionary/dictionary";
const routes = createBrowserRouter(
  [
    {
      path: "/",
      element: <App />,
      children: [
        {
          index: true,
          element: <LandingPage />,
        },
        {
          path: "/default",
          element: <Default />,
        },
        {
          path: "/products",
          element: <Product />,
        },
        {
          path: "/login",
          element: <LoginForm />,
        },
        {
          path: "/dictionary",
          element: <Dictionary />,
        },
      ],
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  }
);

export default routes;
