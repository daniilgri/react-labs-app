import React from "react";
import PropTypes from "prop-types";

import { Route, Redirect } from "react-router-dom";

const AdminRoute = ({ component: Component, loading, user, error, loggedIn, ...rest }) => {
  return (
    !loading &&
    loggedIn && (
      <Route
        {...rest}
        render={props =>
          loggedIn && user.role === "admin" ? <Component {...props} /> : <Redirect to="/" />
        }
      />
    )
  );
};

AdminRoute.defaultProps = {
  error: "",
  component: () => {},
  user: {
    uid: "",
    firstName: "",
    lastName: "",
    email: "",
    role: "guest",
    requestOnDelete: false,
  },
};

AdminRoute.propTypes = {
  loading: PropTypes.bool.isRequired,
  user: PropTypes.objectOf(
    PropTypes.oneOfType([PropTypes.bool, PropTypes.number, PropTypes.string])
  ),
  error: PropTypes.string,
  component: PropTypes.elementType,
  loggedIn: PropTypes.bool.isRequired,
};

export default AdminRoute;
