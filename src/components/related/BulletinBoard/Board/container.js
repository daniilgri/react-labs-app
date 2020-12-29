import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchFilmsInitialRequested,
  fetchFilmsNextRequested,
  setFilmsSearchQuery,
} from "../../../../store/actions/filmsActions";

import Component from "./Component";

const mapStateToProps = state => ({
  loading: state.filmsBoard.loading,
  films: state.filmsBoard.films,
  error: state.filmsBoard.error,
  allCount: state.filmsBoard.allCount,
  count: state.filmsBoard.count,
  query: state.filmsBoard.query,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { fetchFilmsInitialRequested, fetchFilmsNextRequested, setFilmsSearchQuery },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
