import { takeLatest, all, fork } from "redux-saga/effects";

import { signUpRequested, signInRequested } from "../actions/authActions";
import {
  addFilmRequested,
  fetchFilmByIdRequested,
  fetchFilmsInitialRequested,
} from "../actions/filmsActions";

import { addFilm, fetchFilmsInitial, fetchFilmById } from "./filmsSagas";
import { signUp, signIn, authCurrentUser } from "./authSagas";

function* rootSaga() {
  yield all([
    yield fork(authCurrentUser),

    yield takeLatest(addFilmRequested, addFilm),
    yield takeLatest(fetchFilmsInitialRequested, fetchFilmsInitial),
    yield takeLatest(fetchFilmByIdRequested, fetchFilmById),

    yield takeLatest(signUpRequested, signUp),
    yield takeLatest(signInRequested, signIn),
  ]);
}

export default rootSaga;
