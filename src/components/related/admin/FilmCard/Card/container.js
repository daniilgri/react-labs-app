import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchFilmByIdAdminPanelRequested } from "../../../../../store/actions/filmsAdminPanelActions";
import Component from "./Component.jsx";

const mapStateToProps = (state) => ({
  loading: state.filmCardAdminPanel.loading,
  film: state.filmCardAdminPanel.film,
  filmError: state.filmCardAdminPanel.error,
  user: state.auth.user,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchFilmByIdAdminPanelRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
