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
} from "../actions/filmsActions";
import { fetchFilmsAdminPanelInitialRequested } from "../actions/filmsAdminPanelActions";
import { fetchUsersAdminPanelInitialRequested } from "../actions/usersAdminPanelActions";
import {
  makeOrderRequested,
  fetchOrdersInitialRequested,
  cancelOrderRequested,
} from "../actions/ordersActions";

import { addFilm, fetchFilmsInitial, fetchFilmById } from "./filmsSagas";
import { fetchUsersAdminPanelInitial } from "./usersAdminPanel";
import {
  signUp,
  signIn,
  authCurrentUser,
  signOut,
  requestOnDelete,
  cancelRequestOnDelete,
} from "./authSagas";
import { fetchFilmsAdminPanelInitial } from "./filmsAdminPanel";
import { makeOrder, fetchOrdersInitial, cancelOrder } from "./ordersSaga";

function* rootSaga() {
  yield all([
    yield fork(authCurrentUser),

    yield takeLatest(addFilmRequested, addFilm),
    yield takeLatest(fetchFilmsInitialRequested, fetchFilmsInitial),
    yield takeLatest(fetchFilmByIdRequested, fetchFilmById),

    yield takeLatest(signUpRequested, signUp),
    yield takeLatest(signInRequested, signIn),
    yield takeLatest(signOutRequested, signOut),
    yield takeLatest(requestOnDeleteRequested, requestOnDelete),
    yield takeLatest(cancelRequestOnDeleteRequested, cancelRequestOnDelete),

    yield takeLatest(
      fetchFilmsAdminPanelInitialRequested,
      fetchFilmsAdminPanelInitial
    ),
    yield takeLatest(
      fetchUsersAdminPanelInitialRequested,
      fetchUsersAdminPanelInitial
    ),

    yield takeLatest(makeOrderRequested, makeOrder),
    yield takeLatest(fetchOrdersInitialRequested, fetchOrdersInitial),
    yield takeLatest(cancelOrderRequested, cancelOrder),
  ]);
}

export default rootSaga;
