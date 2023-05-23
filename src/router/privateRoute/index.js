import React from "react";
import { Navigate } from "react-router";

function PrivateRoute({ children, auth }) {
  return <>{auth ? children : <Navigate to="/" />}</>;
}

export default PrivateRoute;
