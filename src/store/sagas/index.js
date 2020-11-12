import { takeLatest, all, fork } from "redux-saga/effects";

import { signUpRequested, signInRequested } from "../actions/authActions";
import {
  addFilmRequested,
  fetchFilmByIdRequested,
  fetchFilmsInitialRequested,
} from "../actions/filmsActions";
import { fetchFilmsAdminPanelInitialRequested } from "../actions/filmsAdminPanelActions";
import { fetchUsersAdminPanelInitialRequested } from "../actions/usersAdminPanelActions";

import { addFilm, fetchFilmsInitial, fetchFilmById } from "./filmsSagas";
import { fetchUsersAdminPanelInitial } from "./usersAdminPanel";
import { signUp, signIn, authCurrentUser } from "./authSagas";
import { fetchFilmsAdminPanelInitial } from "./filmsAdminPanel";

function* rootSaga() {
  yield all([
    yield fork(authCurrentUser),

    yield takeLatest(addFilmRequested, addFilm),
    yield takeLatest(fetchFilmsInitialRequested, fetchFilmsInitial),
    yield takeLatest(fetchFilmByIdRequested, fetchFilmById),

    yield takeLatest(signUpRequested, signUp),
    yield takeLatest(signInRequested, signIn),

    yield takeLatest(
      fetchFilmsAdminPanelInitialRequested,
      fetchFilmsAdminPanelInitial
    ),
    yield takeLatest(
      fetchUsersAdminPanelInitialRequested,
      fetchUsersAdminPanelInitial
    ),
  ]);
}

export default rootSaga;
