import { call, put } from "redux-saga/effects";

import { getFilmsInitialAPI, deleteFilmAPI } from "../../services/filmsAPI";

import {
  fetchFilmsAdminPanelInitialSucceed,
  fetchFilmsAdminPanelInitialFailed,
  deleteFilmFailed,
  deleteFilmSucceed,
  fetchFilmsAdminPanelInitialRequested,
} from "../actions/filmsAdminPanelActions";

export function* fetchFilmsAdminPanelInitial({ payload }) {
  try {
    const data = yield call(getFilmsInitialAPI, payload);
    yield put(fetchFilmsAdminPanelInitialSucceed(data));
  } catch (error) {
    yield put(fetchFilmsAdminPanelInitialFailed(error));
  }
}

export function* deleteFilm({ payload }) {
  try {
    yield call(deleteFilmAPI, payload);
    yield put(deleteFilmSucceed());
    yield put(fetchFilmsAdminPanelInitialRequested({ count: 25 }));
  } catch (error) {
    yield put(deleteFilmFailed(error));
  }
}
