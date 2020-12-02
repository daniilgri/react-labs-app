import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, restricted, user, loading, error, ...rest }) => {
  return (
    !loading && (
      <Route
        {...rest}
        render={props => (user && restricted ? <Redirect to="/" /> : <Component {...props} />)}
      />
    )
  );
};

PublicRoute.defaultProps = {
  user: null,
  error: "",
  component: () => {},
};

PublicRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.object),
  error: PropTypes.string,
  component: PropTypes.elementType,
  restricted: PropTypes.bool.isRequired,
};

export default PublicRoute;
