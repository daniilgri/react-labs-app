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
  fetchFilmsAdminPanelNextRequested,
} from "../actions/filmsAdminPanelActions";
import {
  fetchUsersAdminPanelInitialRequested,
  deleteUserRequested,
  fetchUsersAdminPanelNextRequested,
} from "../actions/usersAdminPanelActions";
import {
  makeOrderRequested,
  fetchOrdersInitialRequested,
  cancelOrderRequested,
  fetchOrdersNextRequested,
} from "../actions/ordersActions";
import {
  updateProfileRequested,
  changeEmailRequested,
  changePasswordRequested,
} from "../actions/profileActions";
import {
  fetchSubscribersInitialRequested,
  fetchSubscribersNextRequested,
} from "../actions/filmSubscribersActions";

import {
  addFilm,
  fetchFilmsInitial,
  fetchFilmById,
  updateFilmRating,
  fetchFilmsNext,
} from "./filmsSagas";
import {
  fetchUsersAdminPanelInitial,
  deleteUser,
  fetchUsersAdminPanelNext,
} from "./usersAdminPanel";
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
  fetchFilmsAdminPanelNext,
  fetchSubscribersInitial,
  fetchSubscribersNext,
} from "./filmsAdminPanel";
import {
  makeOrder,
  fetchOrdersInitial,
  cancelOrder,
  fetchOrdersNext,
} from "./ordersSaga";

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
    yield takeLatest(
      fetchUsersAdminPanelNextRequested,
      fetchUsersAdminPanelNext
    ),
    yield takeLatest(deleteFilmRequested, deleteFilm),
    yield takeLatest(fetchSubscribersInitialRequested, fetchSubscribersInitial),
    yield takeLatest(fetchSubscribersNextRequested, fetchSubscribersNext),
    yield takeLatest(deleteUserRequested, deleteUser),
    yield takeLatest(
      fetchFilmsAdminPanelNextRequested,
      fetchFilmsAdminPanelNext
    ),

    yield takeLatest(makeOrderRequested, makeOrder),
    yield takeLatest(fetchOrdersInitialRequested, fetchOrdersInitial),
    yield takeLatest(cancelOrderRequested, cancelOrder),
    yield takeLatest(fetchOrdersNextRequested, fetchOrdersNext),

    yield takeLatest(updateProfileRequested, updateProfile),
    yield takeLatest(changeEmailRequested, changeEmail),
    yield takeLatest(changePasswordRequested, changePassword),
  ]);
}

export default rootSaga;
