import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchSubscribersRequested } from "../../../../../store/actions/filmSubscribersActions";
import Component from "./Component.jsx";

const mapStateToProps = (state) => ({
  users: state.filmSubscribers.users,
  loading: state.filmSubscribers.loading,
  error: state.filmSubscribers.error,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchSubscribersRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
