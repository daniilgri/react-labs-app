import React from "react";
import PropTypes from "prop-types";

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

AdminRoute.defaultProps = {
  loading: false,
  user: null,
  error: "",
};

AdminRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  error: PropTypes.string,
};

export default AdminRoute;
