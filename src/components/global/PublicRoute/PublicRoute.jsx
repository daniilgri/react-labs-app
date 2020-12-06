import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, loading, error, loggedIn, ...rest }) => {
  return (
    !loading && (
      <Route
        {...rest}
        render={props => (loggedIn && restricted ? <Redirect to="/" /> : <Component {...props} />)}
      />
    )
  );
};

PublicRoute.defaultProps = {
  error: "",
  component: () => {},
};

PublicRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  component: PropTypes.elementType,
  restricted: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
};

export default PublicRoute;
