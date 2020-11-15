import { call, put } from "redux-saga/effects";

import { makeOrderAPI } from "../../services/ordersAPI";

import { makeOrderFailed, makeOrderSucceed } from "../actions/ordersActions";

export function* makeOrder({ payload }) {
  try {
    yield call(makeOrderAPI, payload);
    yield put(makeOrderSucceed());
  } catch (error) {
    yield put(makeOrderFailed(error));
  }
}
