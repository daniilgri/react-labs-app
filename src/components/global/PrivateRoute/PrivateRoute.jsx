import React from "react";
import PropTypes from "prop-types";

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

PrivateRoute.defaultProps = {
  loading: false,
  user: null,
  error: "",
};

PrivateRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  error: PropTypes.string,
};

export default PrivateRoute;
