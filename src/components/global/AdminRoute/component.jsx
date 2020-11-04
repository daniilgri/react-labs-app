import React from "react";
import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        false && false ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PublicRoute;
