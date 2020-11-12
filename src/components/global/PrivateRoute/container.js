import { connect } from "react-redux";
import PrivateRoute from "./PrivateRoute";

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});

export default connect(mapStateToProps)(PrivateRoute);
