import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signUpRequested } from "../../../../store/actions/authActions";
import Component from "./Component";

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ signUpRequested }, dispatch),
});

export default connect(null, mapDispatchToProps)(Component);
