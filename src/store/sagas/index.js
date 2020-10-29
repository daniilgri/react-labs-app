import { takeLatest, all } from "redux-saga/effects";

import { signUpRequested, signInRequested } from "../actions/authActions";
import { addFilmRequested } from "../actions/filmsActions";
import { fetchFilmsInitialRequested } from "../actions/filmsActions";

import { addFilm, fetchFilmsInitial } from "./filmsSagas";
import { signUp, signIn } from "./authSagas";

function* rootSaga() {
  yield all([
    yield takeLatest(addFilmRequested, addFilm),
    yield takeLatest(fetchFilmsInitialRequested, fetchFilmsInitial),

    yield takeLatest(signUpRequested, signUp),
    yield takeLatest(signInRequested, signIn),
  ]);
}

export default rootSaga;
