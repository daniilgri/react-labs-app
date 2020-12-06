import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  loading: state.auth.loading,
  error: state.auth.error,
});

export default connect(mapStateToProps)(PrivateRoute);
