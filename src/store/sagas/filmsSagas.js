import { call, put } from "redux-saga/effects";

import { addFilmAPI, getFilmsInitialAPI } from "../../services/filmsAPI";

import {
  addFilmSucceed,
  addFilmFailed,
  fetchFilmsInitialSucceed,
  fetchFilmsInitialFailed,
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
