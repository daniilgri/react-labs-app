import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchSubscribersInitialRequested,
  fetchSubscribersNextRequested,
} from "../../../../../store/actions/filmSubscribersActions";
import Component from "./Component";

const mapStateToProps = state => ({
  users: state.filmSubscribers.users,
  loading: state.filmSubscribers.loading,
  error: state.filmSubscribers.error,
  count: state.filmSubscribers.count,
  allCount: state.filmSubscribers.allCount,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { fetchSubscribersInitialRequested, fetchSubscribersNextRequested },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
