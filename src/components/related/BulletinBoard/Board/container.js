import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchFilmsInitialRequested } from "../../../../store/actions/filmsActions";
import Component from "./Component.jsx";

const mapStateToProps = (state) => ({
  loading: state.filmsBoard.loading,
  films: state.filmsBoard.films,
  error: state.filmsBoard.error,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchFilmsInitialRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
