import React from "react";
import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({
  component: Component,
  loading,
  user,
  error,
  ...rest
}) => {
  return (
    !loading && (
      <Route
        {...rest}
        render={(props) =>
          user && user.role === "admin" ? (
            <Component {...props} />
          ) : (
            <Redirect to="/" />
          )
        }
      />
    )
  );
};

export default AdminRoute;
