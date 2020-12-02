import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  editFilmRequested,
  fetchEditFilmRequested,
} from "../../../../../store/actions/filmsAdminPanelActions";
import { openModal as openAddScreeningDateModal } from "../../../../../store/actions/addScreeningDateModalActions";
import Component from "./Component";

const mapStateToProps = state => ({
  loading: state.editFilm.loading,
  error: state.editFilm.error,
  film: state.editFilm.film,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { editFilmRequested, openAddScreeningDateModal, fetchEditFilmRequested },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
