import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, loading, error, loggedIn, ...rest }) => {
  return (
    !loading && (
      <Route
        {...rest}
        render={props => (loggedIn ? <Component {...props} /> : <Redirect to="/login" />)}
      />
    )
  );
};

PrivateRoute.defaultProps = {
  error: "",
  component: () => {},
};

PrivateRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  loggedIn: PropTypes.bool.isRequired,
  error: PropTypes.string,
  component: PropTypes.elementType,
};

export default PrivateRoute;
