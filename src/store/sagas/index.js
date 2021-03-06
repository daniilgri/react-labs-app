import { takeLatest, all, fork } from "redux-saga/effects";

import {
  signUpRequested,
  signInRequested,
  signOutRequested,
  requestOnDeleteRequested,
  cancelRequestOnDeleteRequested,
} from "../actions/authActions";
import {
  fetchFilmByIdRequested,
  fetchFilmsInitialRequested,
  updateFilmRatingRequested,
  fetchFilmsNextRequested,
  setFilmsSearchQuery,
} from "../actions/filmsActions";
import {
  fetchFilmsAdminPanelInitialRequested,
  deleteFilmRequested,
  fetchFilmByIdAdminPanelRequested,
  fetchFilmsAdminPanelNextRequested,
  addFilmRequested,
  editFilmRequested,
  fetchEditFilmRequested,
  setAdminPanelFilmsSearchQuery,
} from "../actions/filmsAdminPanelActions";
import {
  fetchUsersAdminPanelInitialRequested,
  deleteUserRequested,
  fetchUsersAdminPanelNextRequested,
  setUsersSearchQuery,
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

import { fetchFilmsInitial, fetchFilmById, updateFilmRating, fetchFilmsNext } from "./filmsSagas";
import {
  fetchUsersAdminPanelInitial,
  deleteUser,
  fetchUsersAdminPanelNext,
} from "./usersAdminPanelSagas";
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
  addFilm,
  editFilm,
  fetchEditFilm,
} from "./filmsAdminPanelSagas";
import { makeOrder, fetchOrdersInitial, cancelOrder, fetchOrdersNext } from "./ordersSaga";

function* rootSaga() {
  yield all([
    yield fork(authCurrentUser),

    yield takeLatest(addFilmRequested, addFilm),
    yield takeLatest(editFilmRequested, editFilm),

    yield takeLatest(fetchFilmsInitialRequested, fetchFilmsInitial),
    yield takeLatest(fetchFilmsNextRequested, fetchFilmsNext),
    yield takeLatest(setFilmsSearchQuery, fetchFilmsInitial),

    yield takeLatest(fetchFilmByIdRequested, fetchFilmById),

    yield takeLatest(updateFilmRatingRequested, updateFilmRating),

    yield takeLatest(signUpRequested, signUp),
    yield takeLatest(signInRequested, signIn),
    yield takeLatest(signOutRequested, signOut),

    yield takeLatest(requestOnDeleteRequested, requestOnDelete),
    yield takeLatest(cancelRequestOnDeleteRequested, cancelRequestOnDelete),

    yield takeLatest(fetchFilmsAdminPanelInitialRequested, fetchFilmsAdminPanelInitial),
    yield takeLatest(fetchFilmsAdminPanelNextRequested, fetchFilmsAdminPanelNext),
    yield takeLatest(setAdminPanelFilmsSearchQuery, fetchFilmsAdminPanelInitial),

    yield takeLatest(fetchFilmByIdAdminPanelRequested, fetchFilmByIdAdminPanel),

    yield takeLatest(fetchUsersAdminPanelInitialRequested, fetchUsersAdminPanelInitial),
    yield takeLatest(fetchUsersAdminPanelNextRequested, fetchUsersAdminPanelNext),
    yield takeLatest(setUsersSearchQuery, fetchUsersAdminPanelInitial),

    yield takeLatest(deleteFilmRequested, deleteFilm),
    yield takeLatest(fetchSubscribersInitialRequested, fetchSubscribersInitial),
    yield takeLatest(fetchSubscribersNextRequested, fetchSubscribersNext),

    yield takeLatest(deleteUserRequested, deleteUser),

    yield takeLatest(fetchEditFilmRequested, fetchEditFilm),

    yield takeLatest(makeOrderRequested, makeOrder),
    yield takeLatest(cancelOrderRequested, cancelOrder),

    yield takeLatest(fetchOrdersInitialRequested, fetchOrdersInitial),
    yield takeLatest(fetchOrdersNextRequested, fetchOrdersNext),

    yield takeLatest(updateProfileRequested, updateProfile),
    yield takeLatest(changeEmailRequested, changeEmail),
    yield takeLatest(changePasswordRequested, changePassword),
  ]);
}

export default rootSaga;
