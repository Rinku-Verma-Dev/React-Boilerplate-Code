import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../components/page/home";
import Profile from "../components/page/profile";
import PrivateRoute from "./privateRoute";
import useAuth from "../utils/hooks";
import RestrictedRoute from "./restrictedRoute";
import Login from "../components/page/login";
import PublicRoute from "./publicRoute";

const Routing = () => {
  const auth = useAuth();

  return (
    <Routes>
      <Route
        path="/"
        element={
          <PublicRoute>
            <Home />
          </PublicRoute>
        }
      />
      <Route
        path="/about"
        element={
          <PrivateRoute auth={auth}>
            <Profile />
          </PrivateRoute>
        }
      />
      <Route
        path="/login"
        element={
          <RestrictedRoute auth={auth}>
            <Login />
          </RestrictedRoute>
        }
      />
    </Routes>
  );
};
export default Routing;
