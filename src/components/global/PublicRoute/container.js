import { connect } from "react-redux";
import PublicRoute from "./PublicRoute";

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  loading: state.auth.loading,
  error: state.auth.error,
});

export default connect(mapStateToProps)(PublicRoute);
