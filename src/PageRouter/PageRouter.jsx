import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Todo from "../components/Todo";
import routes from "./routes.json";
import ErrorPage from "../components/ErrorPage";
import LoginSignup from "../components/LoginSignup";

const PageRouter = () => {
  const route = createBrowserRouter([
    {
      path: `${routes.HOME}`,
      element: <LoginSignup />,
      errorElement: <ErrorPage />,
    },
    {
      path: `${routes.USER}`,
      element: <Todo />,
      errorElement: <ErrorPage />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={route} />
    </div>
  );
};

export default PageRouter;
