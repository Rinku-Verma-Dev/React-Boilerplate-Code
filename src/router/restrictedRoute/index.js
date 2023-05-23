import React from "react";
import { Navigate } from "react-router";

function RestrictedRoute({ children, auth }) {
  return <>{auth ? <Navigate to="/" /> : children}</>;
}

export default RestrictedRoute;
