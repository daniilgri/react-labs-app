import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import {
  fetchFilmByIdRequested,
  updateFilmRatingRequested,
} from "../../../../store/actions/filmsActions";
import { makeOrderRequested } from "../../../../store/actions/ordersActions";
import Component from "./Component";

const mapStateToProps = state => ({
  loading: state.filmCard.loading,
  film: state.filmCard.film,
  filmError: state.filmCard.error,
  user: state.auth.user,
  orderError: state.newOrder.error,
  orderLoading: state.newOrder.loading,
  loggedIn: state.auth.loggedIn,
});

const mapDispatchToProps = dispatch => ({
  ...bindActionCreators(
    { fetchFilmByIdRequested, makeOrderRequested, updateFilmRatingRequested },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(Component);
