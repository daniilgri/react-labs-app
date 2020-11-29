import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchFilmsAdminPanelInitialRequested,
  deleteFilmRequested,
  fetchFilmsAdminPanelNextRequested,
} from "../../../../../store/actions/filmsAdminPanelActions";
import Component from "./Component.jsx";

const mapStateToProps = (state) => ({
  loading: state.filmsAdminPanel.loading,
  films: state.filmsAdminPanel.films,
  error: state.filmsAdminPanel.error,
  allCount: state.filmsAdminPanel.allCount,
  count: state.filmsAdminPanel.count,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(
    {
      fetchFilmsAdminPanelInitialRequested,
      deleteFilmRequested,
      fetchFilmsAdminPanelNextRequested,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
