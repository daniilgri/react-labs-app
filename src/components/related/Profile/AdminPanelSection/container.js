import { connect } from "react-redux";
import component from "./component";

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});

export default connect(mapStateToProps)(component);
