import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchUsersAdminPanelInitialRequested } from "../../../../../store/actions/usersAdminPanelActions";
import Component from "./Component.jsx";

const mapStateToProps = (state) => ({
  loading: state.usersAdminPanel.loading,
  users: state.usersAdminPanel.users,
  error: state.usersAdminPanel.error,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchUsersAdminPanelInitialRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
