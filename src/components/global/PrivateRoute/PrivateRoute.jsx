import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, loading, user, error, ...rest }) => {
  return (
    !loading && (
      <Route
        {...rest}
        render={props => (user ? <Component {...props} /> : <Redirect to="/login" />)}
      />
    )
  );
};

PrivateRoute.defaultProps = {
  user: null,
  error: "",
  component: () => {},
};

PrivateRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.object),
  error: PropTypes.string,
  component: PropTypes.elementType,
};

export default PrivateRoute;
