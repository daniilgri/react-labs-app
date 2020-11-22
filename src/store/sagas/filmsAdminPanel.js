import { call, put } from "redux-saga/effects";

import {
  getFilmsInitialAPI,
  deleteFilmAPI,
  getFilmByIdAPI,
} from "../../services/filmsAPI";
import { fetchFilmSubscribersAPI } from "../../services/usersAPI";

import {
  fetchFilmsAdminPanelInitialSucceed,
  fetchFilmsAdminPanelInitialFailed,
  deleteFilmFailed,
  deleteFilmSucceed,
  fetchFilmsAdminPanelInitialRequested,
  fetchFilmByIdAdminPanelFailed,
  fetchFilmByIdAdminPanelSucceed,
} from "../actions/filmsAdminPanelActions";
import {
  fetchSubscribersSucceed,
  fetchSubscribersFailed,
} from "../actions/filmSubscribersActions";

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

export function* fetchFilmByIdAdminPanel({ payload }) {
  try {
    const data = yield call(getFilmByIdAPI, payload);
    yield put(fetchFilmByIdAdminPanelSucceed(data));
  } catch (error) {
    yield put(fetchFilmByIdAdminPanelFailed(error));
  }
}

export function* fetchSubscribers({ payload }) {
  try {
    const data = yield call(fetchFilmSubscribersAPI, payload);
    yield put(fetchSubscribersSucceed(data));
  } catch (error) {
    console.log(error);
    yield put(fetchSubscribersFailed(error));
  }
}
