import { call, put } from "redux-saga/effects";

import { getUsersInitialAPI } from "../../services/usersAPI";

import {
  fetchUsersAdminPanelInitialFailed,
  fetchUsersAdminPanelInitialSucceed,
} from "../actions/usersAdminPanelActions.js";

export function* fetchUsersAdminPanelInitial({ payload }) {
  try {
    const data = yield call(getUsersInitialAPI, payload);
    yield put(fetchUsersAdminPanelInitialSucceed(data));
  } catch (error) {
    yield put(fetchUsersAdminPanelInitialFailed(error));
  }
}
