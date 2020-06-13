import React from "react";
import { Redirect } from "react-router-dom";
import { Authorize } from "../containers";
import { useAuthorizeRoute } from "../utils/hooks";

const AuthorizeRoute = () => {
  const { redirect } = useAuthorizeRoute();
  if (redirect) {
    return <Redirect to={{ pathname: "/dashboard" }} />;
  }
  return <Authorize />;
};

export default AuthorizeRoute;