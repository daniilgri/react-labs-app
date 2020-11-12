import { call, put, take } from "redux-saga/effects";

import {
  signUpAPI,
  signInAPI,
  getAuthChannelAPI,
  signOutAPI,
  requestOnDeleteAPI,
  cancelRequestOnDeleteAPI,
} from "../../services/authAPI";
import {
  signUpSucceed,
  signUpFailed,
  signInSucceed,
  signInFailed,
  authCurrentUserFailed,
  authCurrentUserSucceed,
  authCurrentUserRequested,
  signOutFailed,
  signOutSucceed,
  requestOnDeleteFailed,
  requestOnDeleteSucceed,
  cancelRequestOnDeleteSucceed,
  cancelRequestOnDeleteFailed,
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

export function* signOut() {
  try {
    yield call(signOutAPI);
    yield put(signOutSucceed());
  } catch (error) {
    yield put(signOutFailed());
  }
}

export function* authCurrentUser() {
  try {
    yield put(authCurrentUserRequested());

    const authChannel = yield call(getAuthChannelAPI);

    while (true) {
      const { user } = yield take(authChannel);
      yield put(authCurrentUserSucceed(user));
    }
  } catch (error) {
    yield put(authCurrentUserFailed(error));
  }
}

export function* requestOnDelete({ payload }) {
  try {
    yield call(requestOnDeleteAPI, payload);
    yield put(requestOnDeleteSucceed());
  } catch (error) {
    yield put(requestOnDeleteFailed(error));
  }
}

export function* cancelRequestOnDelete({ payload }) {
  try {
    yield call(cancelRequestOnDeleteAPI, payload);
    yield put(cancelRequestOnDeleteSucceed());
  } catch (error) {
    yield put(cancelRequestOnDeleteFailed(error));
  }
}
