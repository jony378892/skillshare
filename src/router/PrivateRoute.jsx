import React, { use } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import Loading from "../components/Loading";

export default function PrivateRoute({ children }) {
  const { user, loading } = use(AuthContext);
  const location = useLocation();

  console.log(location);

  if (loading) {
    return <Loading />;
  }

  if (user && user?.email) {
    return children;
  }

  return <Navigate state={location.pathname} to="/auth/login" />;
}
