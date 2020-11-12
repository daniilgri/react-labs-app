import React from "react";
import PropTypes from "prop-types";

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

PublicRoute.defaultProps = {
  loading: false,
  user: null,
  error: "",
};

PublicRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.object,
  error: PropTypes.string,
};

export default PublicRoute;
