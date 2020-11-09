import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { addFilmRequested } from "../../../../../store/actions/filmsActions";
import Component from "./Component";

const mapStateToProps = (state) => ({
  loading: state.addFilm.loading,
  error: state.addFilm.error,
});

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators({ addFilmRequested }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
