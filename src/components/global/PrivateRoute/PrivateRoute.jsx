import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({
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
          user ? <Component {...props} /> : <Redirect to="/login" />
        }
      />
    )
  );
};

export default PrivateRoute;
