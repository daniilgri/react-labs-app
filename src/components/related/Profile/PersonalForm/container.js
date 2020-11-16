import { connect } from "react-redux";
import Component from "./Component";

const mapStateToProps = (state) => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});

export default connect(mapStateToProps)(Component);
