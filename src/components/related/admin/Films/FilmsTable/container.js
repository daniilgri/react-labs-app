import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchFilmsAdminPanelInitialRequested,
  deleteFilmRequested,
} from "../../../../../store/actions/filmsAdminPanelActions";
import Component from "./Component.jsx";

const mapStateToProps = (state) => ({
  loading: state.filmsAdminPanel.loading,
  films: state.filmsAdminPanel.films,
  error: state.filmsAdminPanel.error,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    { fetchFilmsAdminPanelInitialRequested, deleteFilmRequested },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
