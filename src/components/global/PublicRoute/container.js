import { connect } from "react-redux";
import PublicRoute from "./PublicRoute";

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});

export default connect(mapStateToProps)(PublicRoute);
