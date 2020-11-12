import { call, put, take } from "redux-saga/effects";

import {
  signUpAPI,
  signInAPI,
  getAuthChannelAPI,
} from "../../services/authAPI";
import {
  signUpSucceed,
  signUpFailed,
  signInSucceed,
  signInFailed,
  authCurrentUserFailed,
  authCurrentUserSucceed,
} from "../actions/authActions";

export function* signUp({ payload }) {
  try {
    const data = yield call(signUpAPI, payload);
    yield put(signUpSucceed(data));
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signIn({ payload }) {
  try {
    const data = yield call(signInAPI, payload);
    yield put(signInSucceed(data));
  } catch (error) {
    yield put(signInFailed(error));
  }
}

export function* authCurrentUser() {
  try {
    const authChannel = yield call(getAuthChannelAPI);

    while (true) {
      const { user } = yield take(authChannel);
      yield put(authCurrentUserSucceed(user));
    }
  } catch (error) {
    yield put(authCurrentUserFailed(error));
  }
}
