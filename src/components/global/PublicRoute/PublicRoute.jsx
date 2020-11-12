import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({
  component: Component,
  restricted,
  user,
  loading,
  error,
  ...rest
}) => {
  return (
    !loading && (
      <Route
        {...rest}
        render={(props) =>
          user && restricted ? <Redirect to="/" /> : <Component {...props} />
        }
      />
    )
  );
};

export default PublicRoute;
