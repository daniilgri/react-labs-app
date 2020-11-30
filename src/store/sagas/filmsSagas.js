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
} from "../actions/filmsActions";

export function* fetchFilmsInitial({ payload }) {
  try {
    const limit = yield select((state) => state.filmsBoard.limit);
    const query = yield select((state) => state.filmsBoard.query);
    const data = yield call(getFilmsInitialAPI, { limit, query });
    yield put(fetchFilmsInitialSucceed(data));
  } catch (error) {
    yield put(fetchFilmsInitialFailed(error));
  }
}

export function* fetchFilmsNext() {
  try {
    const limit = yield select((state) => state.filmsBoard.limit);
    const query = yield select((state) => state.filmsBoard.query);
    const films = yield select((state) => state.filmsBoard.films);
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
  } catch (error) {
    yield put(updateFilmRatingFailed(error));
  }
}
