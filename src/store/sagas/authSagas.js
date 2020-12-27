import { call, fork, put } from "redux-saga/effects";

import {
  signUpAPI,
  signInAPI,
  getAuthChannelAPI,
  signOutAPI,
  requestOnDeleteAPI,
  cancelRequestOnDeleteAPI,
  updateProfileAPI,
  changeEmailAPI,
  changePasswordAPI,
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
import {
  changeEmailFailed,
  changeEmailSucceed,
  updateProfileFailed,
  updateProfileSucceed,
  changePasswordFailed,
  changePasswordSucceed,
} from "../actions/profileActions";

export function* authCurrentUser() {
  try {
    yield put(authCurrentUserRequested());
    const { user, loggedIn } = yield call(getAuthChannelAPI);
    yield put(authCurrentUserSucceed({ user, loggedIn }));
  } catch (error) {
    yield put(authCurrentUserFailed(error));
  }
}

export function* signUp({ payload }) {
  try {
    yield call(signUpAPI, payload);
    yield put(signUpSucceed());
    yield fork(authCurrentUser);
  } catch (error) {
    yield put(signUpFailed(error));
  }
}

export function* signIn({ payload }) {
  try {
    yield call(signInAPI, payload);
    yield put(signInSucceed());
    yield fork(authCurrentUser);
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

export function* updateProfile({ payload }) {
  try {
    yield call(updateProfileAPI, payload);
    yield fork(authCurrentUser);
    yield put(updateProfileSucceed());
  } catch (error) {
    yield put(updateProfileFailed(error));
  }
}

export function* changeEmail({ payload }) {
  try {
    yield call(changeEmailAPI, payload);
    yield fork(authCurrentUser);
    yield put(changeEmailSucceed());
  } catch (error) {
    yield put(changeEmailFailed(error));
  }
}

export function* changePassword({ payload }) {
  try {
    yield call(changePasswordAPI, payload);
    yield put(changePasswordSucceed());
  } catch (error) {
    yield put(changePasswordFailed(error));
  }
}
