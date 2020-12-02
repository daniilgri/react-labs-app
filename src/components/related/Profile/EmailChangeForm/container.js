import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { changeEmailRequested } from "../../../../store/actions/profileActions";
import Component from "./Component";

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ changeEmailRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
