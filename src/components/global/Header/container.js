import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signOutRequested } from "../../../store/actions/authActions";
import Component from "./Component";

const mapStateToProps = state => ({
  loggedIn: state.auth.loggedIn,
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ signOutRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
