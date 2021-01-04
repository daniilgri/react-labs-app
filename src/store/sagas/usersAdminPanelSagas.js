import { call, put, select } from "redux-saga/effects";

import { getUsersInitialAPI, deleteUserAPI, getUsersNextAPI } from "../../services/usersAPI";

import getUsersLimit from "../selectors/usersAdminPanelSelectors/getUsersLimit";
import getUsersQuery from "../selectors/usersAdminPanelSelectors/getUsersQuery";
import getUsers from "../selectors/usersAdminPanelSelectors/getUsers";

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
    const limit = yield select(getUsersLimit);
    const query = yield select(getUsersQuery);
    const data = yield call(getUsersInitialAPI, { limit, query });
    yield put(fetchUsersAdminPanelInitialSucceed(data));
  } catch (error) {
    yield put(fetchUsersAdminPanelInitialFailed(error));
  }
}

export function* fetchUsersAdminPanelNext() {
  try {
    const limit = yield select(getUsersLimit);
    const users = yield select(getUsers);
    const query = yield select(getUsersQuery);
    const data = yield call(getUsersNextAPI, { limit, users, query });
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
