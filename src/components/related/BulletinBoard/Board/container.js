import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchFilmsInitialRequested,
  fetchFilmsNextRequested,
} from "../../../../store/actions/filmsActions";
import Component from "./Component";

const mapStateToProps = state => ({
  loading: state.filmsBoard.loading,
  films: state.filmsBoard.films,
  error: state.filmsBoard.error,
  allCount: state.filmsBoard.allCount,
  count: state.filmsBoard.count,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators({ fetchFilmsInitialRequested, fetchFilmsNextRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
