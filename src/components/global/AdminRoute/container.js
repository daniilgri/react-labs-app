import { connect } from "react-redux";
import AdminRoute from "./AdminRoute";

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
  loggedIn: state.auth.loggedIn,
});

export default connect(mapStateToProps)(AdminRoute);
