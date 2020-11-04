import { call, put } from "redux-saga/effects";

import {
  addFilmAPI,
  getFilmByIdAPI,
  getFilmsInitialAPI,
} from "../../services/filmsAPI";

import {
  addFilmSucceed,
  addFilmFailed,
  fetchFilmsInitialSucceed,
  fetchFilmsInitialFailed,
  fetchFilmByIdSucceed,
  fetchFilmByIdFailed,
} from "../actions/filmsActions";

export function* addFilm({ payload }) {
  try {
    yield call(addFilmAPI, payload);
    yield put(addFilmSucceed());
  } catch (error) {
    yield put(addFilmFailed(error));
  }
}

export function* fetchFilmsInitial({ payload }) {
  try {
    const data = yield call(getFilmsInitialAPI, payload);
    yield put(fetchFilmsInitialSucceed(data));
  } catch (error) {
    yield put(fetchFilmsInitialFailed(error));
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
