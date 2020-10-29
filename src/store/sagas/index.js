import { takeEvery, takeLatest, all } from "redux-saga/effects";

import { addFilm, fetchFilmsInitial } from "./filmsSagas";

function* rootSaga() {
  yield all([
    yield takeLatest("@FILMS/ADD_FILM_REQUESTED", addFilm),
    yield takeLatest("@FILMS/FETCH_FILMS_INITIAL_REQUESTED", fetchFilmsInitial),
  ]);
}

export default rootSaga;
