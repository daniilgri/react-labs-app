import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchUsersAdminPanelInitialRequested,
  deleteUserRequested,
  fetchUsersAdminPanelNextRequested,
  setUsersSearchQuery,
} from "../../../../../store/actions/usersAdminPanelActions";
import Component from "./Component";

const mapStateToProps = state => ({
  loading: state.usersAdminPanel.loading,
  users: state.usersAdminPanel.users,
  error: state.usersAdminPanel.error,
  allCount: state.usersAdminPanel.allCount,
  count: state.usersAdminPanel.count,
  currentUser: state.auth.user,
  loadingCurrentUser: state.auth.loading,
  errorCurrentUser: state.auth.error,
  query: state.usersAdminPanel.query,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      fetchUsersAdminPanelInitialRequested,
      deleteUserRequested,
      fetchUsersAdminPanelNextRequested,
      setUsersSearchQuery,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
