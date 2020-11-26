import { takeLatest, all, fork } from "redux-saga/effects";

import {
  signUpRequested,
  signInRequested,
  signOutRequested,
  requestOnDeleteRequested,
  cancelRequestOnDeleteRequested,
} from "../actions/authActions";
import {
  addFilmRequested,
  fetchFilmByIdRequested,
  fetchFilmsInitialRequested,
  updateFilmRatingRequested,
  fetchFilmsNextRequested,
} from "../actions/filmsActions";
import {
  fetchFilmsAdminPanelInitialRequested,
  deleteFilmRequested,
  fetchFilmByIdAdminPanelRequested,
} from "../actions/filmsAdminPanelActions";
import {
  fetchUsersAdminPanelInitialRequested,
  deleteUserRequested,
} from "../actions/usersAdminPanelActions";
import {
  makeOrderRequested,
  fetchOrdersInitialRequested,
  cancelOrderRequested,
} from "../actions/ordersActions";
import {
  updateProfileRequested,
  changeEmailRequested,
  changePasswordRequested,
} from "../actions/profileActions";
import { fetchSubscribersRequested } from "../actions/filmSubscribersActions";

import {
  addFilm,
  fetchFilmsInitial,
  fetchFilmById,
  updateFilmRating,
  fetchFilmsNext,
} from "./filmsSagas";
import { fetchUsersAdminPanelInitial, deleteUser } from "./usersAdminPanel";
import {
  signUp,
  signIn,
  authCurrentUser,
  signOut,
  requestOnDelete,
  cancelRequestOnDelete,
  updateProfile,
  changeEmail,
  changePassword,
} from "./authSagas";
import {
  fetchFilmsAdminPanelInitial,
  deleteFilm,
  fetchFilmByIdAdminPanel,
  fetchSubscribers,
} from "./filmsAdminPanel";
import { makeOrder, fetchOrdersInitial, cancelOrder } from "./ordersSaga";

function* rootSaga() {
  yield all([
    yield fork(authCurrentUser),

    yield takeLatest(addFilmRequested, addFilm),
    yield takeLatest(fetchFilmsInitialRequested, fetchFilmsInitial),
    yield takeLatest(fetchFilmsNextRequested, fetchFilmsNext),
    yield takeLatest(fetchFilmByIdRequested, fetchFilmById),
    yield takeLatest(updateFilmRatingRequested, updateFilmRating),

    yield takeLatest(signUpRequested, signUp),
    yield takeLatest(signInRequested, signIn),
    yield takeLatest(signOutRequested, signOut),
    yield takeLatest(requestOnDeleteRequested, requestOnDelete),
    yield takeLatest(cancelRequestOnDeleteRequested, cancelRequestOnDelete),

    yield takeLatest(
      fetchFilmsAdminPanelInitialRequested,
      fetchFilmsAdminPanelInitial
    ),
    yield takeLatest(fetchFilmByIdAdminPanelRequested, fetchFilmByIdAdminPanel),
    yield takeLatest(
      fetchUsersAdminPanelInitialRequested,
      fetchUsersAdminPanelInitial
    ),
    yield takeLatest(deleteFilmRequested, deleteFilm),
    yield takeLatest(fetchSubscribersRequested, fetchSubscribers),
    yield takeLatest(deleteUserRequested, deleteUser),

    yield takeLatest(makeOrderRequested, makeOrder),
    yield takeLatest(fetchOrdersInitialRequested, fetchOrdersInitial),
    yield takeLatest(cancelOrderRequested, cancelOrder),

    yield takeLatest(updateProfileRequested, updateProfile),
    yield takeLatest(changeEmailRequested, changeEmail),
    yield takeLatest(changePasswordRequested, changePassword),
  ]);
}

export default rootSaga;
