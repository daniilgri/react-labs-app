import { call, put } from "redux-saga/effects";

import { getFilmsInitialAPI } from "../../services/filmsAPI";

import {
  fetchFilmsAdminPanelInitialSucceed,
  fetchFilmsAdminPanelInitialFailed,
} from "../actions/filmsAdminPanelActions";

export function* fetchFilmsAdminPanelInitial({ payload }) {
  try {
    const data = yield call(getFilmsInitialAPI, payload);
    yield put(fetchFilmsAdminPanelInitialSucceed(data));
  } catch (error) {
    yield put(fetchFilmsAdminPanelInitialFailed(error));
  }
}
