import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { fetchFilmByIdRequested } from "../../../../../store/actions/filmsActions";
import Component from "./Component.jsx";

const mapStateToProps = (state) => ({
  loading: state.filmCard.loading,
  film: state.filmCard.film,
  error: state.filmCard.error,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ fetchFilmByIdRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
