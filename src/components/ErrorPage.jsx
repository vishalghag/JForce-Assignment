import React from "react";
import { Link } from "react-router-dom";
import routes from "../PageRouter/routes.json";

const ErrorPage = () => {
  return (
    <div className=" flex justify-center items-center flex-col mt-6">
      <h1 className=" text-3xl text-black font-medium">Page not found 404</h1>
      <Link to={routes.HOME}>
        <h2 className=" mt-4 text-3xl text-red-500 font-normal">
          Click here to get back to home page
        </h2>
      </Link>
    </div>
  );
};

export default ErrorPage;
