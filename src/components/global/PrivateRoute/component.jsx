import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...options }) => {
  const isLogged = false;
  const isLoading = false;

  return (
    !isLoading && (
      <Route
        render={(props) =>
          isLogged ? (
            <Component {...props} />
          ) : (
            <Redirect
              to={{
                pathname: "/tickets",
                state: { from: props.location },
              }}
            />
          )
        }
        {...options}
      />
    )
  );
};

export default PrivateRoute;
