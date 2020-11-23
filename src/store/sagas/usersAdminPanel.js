import { call, put } from "redux-saga/effects";

import { getUsersInitialAPI, deleteUserAPI } from "../../services/usersAPI";

import {
  fetchUsersAdminPanelInitialFailed,
  fetchUsersAdminPanelInitialSucceed,
  fetchUsersAdminPanelInitialRequested,
  deleteUserFailed,
  deleteUserSucceed,
} from "../actions/usersAdminPanelActions.js";

export function* fetchUsersAdminPanelInitial({ payload }) {
  try {
    const data = yield call(getUsersInitialAPI, payload);
    yield put(fetchUsersAdminPanelInitialSucceed(data));
  } catch (error) {
    yield put(fetchUsersAdminPanelInitialFailed(error));
  }
}

export function* deleteUser({ payload }) {
  try {
    yield call(deleteUserAPI, payload);
    yield put(deleteUserSucceed());
    yield put(fetchUsersAdminPanelInitialRequested({ count: 25 }));
  } catch (error) {
    yield put(deleteUserFailed(error));
  }
}
