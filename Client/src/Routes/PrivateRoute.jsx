import React, { useContext, useEffect } from "react";
import { shallowEqual, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();

  const {  data } = useSelector((store) => {
    // console.log(store.auth.userLogin)
    return {
      isLoading: store.auth.userLogin.isLoading,
      isError: store.auth.userLogin.isError,
      message: store.auth.userLogin.message,
      data: store.auth.data,
    };
  }, shallowEqual);

  // console.log(data.isAuthenticated);

  if (!data.isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }
  return children;
};

export default PrivateRoute;
