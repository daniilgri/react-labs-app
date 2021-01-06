import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchFilmsAdminPanelInitialRequested,
  deleteFilmRequested,
  fetchFilmsAdminPanelNextRequested,
  setAdminPanelFilmsSearchQuery,
} from "../../../../../store/actions/filmsAdminPanelActions";
import Component from "./Component";

const mapStateToProps = state => ({
  loading: state.filmsAdminPanel.loading,
  films: state.filmsAdminPanel.films,
  error: state.filmsAdminPanel.error,
  allCount: state.filmsAdminPanel.allCount,
  count: state.filmsAdminPanel.count,
  query: state.filmsAdminPanel.query,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    {
      fetchFilmsAdminPanelInitialRequested,
      deleteFilmRequested,
      fetchFilmsAdminPanelNextRequested,
      setAdminPanelFilmsSearchQuery,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
