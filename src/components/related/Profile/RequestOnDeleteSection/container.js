import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {
  requestOnDeleteRequested,
  cancelRequestOnDeleteRequested,
} from "../../../../store/actions/authActions";
import Component from "./Component";

const mapStateToProps = state => ({
  user: state.auth.user,
  loading: state.auth.loading,
  error: state.auth.error,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ requestOnDeleteRequested, cancelRequestOnDeleteRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
