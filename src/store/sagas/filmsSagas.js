import { call, put, select } from "redux-saga/effects";

import {
  getFilmByIdAPI,
  getFilmsInitialAPI,
  getFilmsNextAPI,
  updateFilmRatingAPI,
} from "../../services/filmsAPI";

import {
  fetchFilmsInitialSucceed,
  fetchFilmsInitialFailed,
  fetchFilmByIdSucceed,
  fetchFilmByIdFailed,
  updateFilmRatingFailed,
  updateFilmRatingSucceed,
  fetchFilmsNextSucceed,
  fetchFilmsNextFailed,
  fetchFilmByIdRequested,
} from "../actions/filmsActions";

import getFilms from "../selectors/filmsSelectors/getFilms";
import getFilmsLimit from "../selectors/filmsSelectors/getFilmsLimit";
import getFilmsQuery from "../selectors/filmsSelectors/getFilmsQuery";

export function* fetchFilmsInitial() {
  try {
    const limit = yield select(getFilmsLimit);
    const query = yield select(getFilmsQuery);
    const data = yield call(getFilmsInitialAPI, { limit, query });
    yield put(fetchFilmsInitialSucceed(data));
  } catch (error) {
    yield put(fetchFilmsInitialFailed(error));
  }
}

export function* fetchFilmsNext() {
  try {
    const limit = yield select(getFilmsLimit);
    const query = yield select(getFilmsQuery);
    const films = yield select(getFilms);
    const data = yield call(getFilmsNextAPI, { limit, films, query });
    yield put(fetchFilmsNextSucceed(data));
  } catch (error) {
    yield put(fetchFilmsNextFailed(error));
  }
}

export function* fetchFilmById({ payload }) {
  try {
    const data = yield call(getFilmByIdAPI, payload);
    yield put(fetchFilmByIdSucceed(data));
  } catch (error) {
    yield put(fetchFilmByIdFailed(error));
  }
}

export function* updateFilmRating({ payload }) {
  try {
    yield call(updateFilmRatingAPI, payload);
    yield put(updateFilmRatingSucceed());
    yield put(fetchFilmByIdRequested(payload.filmId));
  } catch (error) {
    yield put(updateFilmRatingFailed(error));
  }
}
