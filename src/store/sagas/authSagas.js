import { call, put } from "redux-saga/effects";

import { signUpAPI, signInAPI } from "../../services/authAPI";
import {
  signUpSucceed,
  signUpFailed,
  signInSucceed,
  signInFailed,
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
