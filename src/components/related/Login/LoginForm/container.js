import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { signInRequested } from "../../../../store/actions/authActions";
import Component from "./Component";

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ signInRequested }, dispatch),
});

export default connect(null, mapDispatchToProps)(Component);
