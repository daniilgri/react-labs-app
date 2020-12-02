import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, loading, user, error, ...rest }) => {
  return (
    !loading && (
      <Route
        {...rest}
        render={props =>
          user && user.role === "admin" ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    )
  );
};

AdminRoute.defaultProps = {
  user: null,
  error: "",
  component: () => {},
};

AdminRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(PropTypes.object),
  error: PropTypes.string,
  component: PropTypes.elementType,
};

export default AdminRoute;
