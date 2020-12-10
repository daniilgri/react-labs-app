import { call, put, select } from "redux-saga/effects";

import { getUsersInitialAPI, deleteUserAPI, getUsersNextAPI } from "../../services/usersAPI";

import {
  fetchUsersAdminPanelInitialFailed,
  fetchUsersAdminPanelInitialSucceed,
  fetchUsersAdminPanelInitialRequested,
  deleteUserFailed,
  deleteUserSucceed,
  fetchUsersAdminPanelNextFailed,
  fetchUsersAdminPanelNextSucceed,
} from "../actions/usersAdminPanelActions";

export function* fetchUsersAdminPanelInitial() {
  try {
    const limit = yield select(state => state.usersAdminPanel.limit);
    const data = yield call(getUsersInitialAPI, { limit });
    yield put(fetchUsersAdminPanelInitialSucceed(data));
  } catch (error) {
    yield put(fetchUsersAdminPanelInitialFailed(error));
  }
}

export function* fetchUsersAdminPanelNext() {
  try {
    const limit = yield select(state => state.usersAdminPanel.limit);
    const users = yield select(state => state.usersAdminPanel.users);
    const data = yield call(getUsersNextAPI, { limit, users });
    yield put(fetchUsersAdminPanelNextSucceed(data));
  } catch (error) {
    yield put(fetchUsersAdminPanelNextFailed(error));
  }
}

export function* deleteUser({ payload }) {
  try {
    yield call(deleteUserAPI, payload);
    yield put(deleteUserSucceed());
    yield put(fetchUsersAdminPanelInitialRequested());
  } catch (error) {
    yield put(deleteUserFailed(error));
  }
}
