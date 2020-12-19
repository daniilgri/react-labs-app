import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signInRequested } from "../../../../store/actions/authActions";
import Component from "./Component";

const mapStateToProps = state => ({
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ signInRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
