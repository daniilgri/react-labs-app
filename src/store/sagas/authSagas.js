import { call, put } from "redux-saga/effects";

import {
  signUpAPI,
  signInAPI,
  authCurrentUserAPI,
} from "../../services/authAPI";
import {
  signUpSucceed,
  signUpFailed,
  signInSucceed,
  signInFailed,
  authCurrentUserFailed,
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

export function* authCurrentUser(dispatch) {
  try {
    yield call(authCurrentUserAPI, dispatch);
  } catch (error) {
    yield put(authCurrentUserFailed(error));
  }
}
