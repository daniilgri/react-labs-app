import { call, put, select } from "redux-saga/effects";

import {
  getFilmsInitialAPI,
  deleteFilmAPI,
  getFilmByIdAPI,
  getFilmsNextAPI,
} from "../../services/filmsAPI";
import {
  fetchFilmSubscribersNextAPI,
  fetchFilmSubscribersInitialAPI,
} from "../../services/usersAPI";

import {
  fetchFilmsAdminPanelInitialSucceed,
  fetchFilmsAdminPanelInitialFailed,
  fetchFilmsAdminPanelNextFailed,
  fetchFilmsAdminPanelNextSucceed,
  deleteFilmFailed,
  deleteFilmSucceed,
  fetchFilmsAdminPanelInitialRequested,
  fetchFilmByIdAdminPanelFailed,
  fetchFilmByIdAdminPanelSucceed,
} from "../actions/filmsAdminPanelActions";
import {
  fetchSubscribersInitialFailed,
  fetchSubscribersInitialSucceed,
  fetchSubscribersNextFailed,
  fetchSubscribersNextSucceed,
} from "../actions/filmSubscribersActions";

export function* fetchFilmsAdminPanelInitial() {
  try {
    const limit = yield select((state) => state.filmsAdminPanel.limit);
    const query = yield select((state) => state.filmsAdminPanel.query);
    const data = yield call(getFilmsInitialAPI, { limit, query });
    yield put(fetchFilmsAdminPanelInitialSucceed(data));
  } catch (error) {
    yield put(fetchFilmsAdminPanelInitialFailed(error));
  }
}

export function* fetchFilmsAdminPanelNext() {
  try {
    const limit = yield select((state) => state.filmsAdminPanel.limit);
    console.log(limit);
    const query = yield select((state) => state.filmsAdminPanel.query);
    const films = yield select((state) => state.filmsAdminPanel.films);
    const data = yield call(getFilmsNextAPI, { limit, films, query });
    yield put(fetchFilmsAdminPanelNextSucceed(data));
  } catch (error) {
    yield put(fetchFilmsAdminPanelNextFailed(error));
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

export function* fetchSubscribersInitial({ payload }) {
  try {
    const limit = yield select((state) => state.filmSubscribers.limit);
    const data = yield call(fetchFilmSubscribersInitialAPI, {
      limit,
      filmId: payload.filmId,
    });
    yield put(fetchSubscribersInitialSucceed(data));
  } catch (error) {
    console.log(error);
    yield put(fetchSubscribersInitialFailed(error));
  }
}

export function* fetchSubscribersNext({ payload }) {
  try {
    const limit = yield select((state) => state.filmSubscribers.limit);
    const query = yield select((state) => state.filmSubscribers.query);
    const users = yield select((state) => state.filmSubscribers.orders);
    const data = yield call(fetchFilmSubscribersNextAPI, {
      limit,
      users,
      query,
      filmId: payload.filmId,
    });
    yield put(fetchSubscribersNextSucceed(data));
  } catch (error) {
    yield put(fetchSubscribersNextFailed(error));
  }
}
