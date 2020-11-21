import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changePasswordRequested } from "../../../../store/actions/profileActions";
import Component from "./Component";

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ changePasswordRequested }, dispatch),
});

export default connect(null, mapDispatchToProps)(Component);
