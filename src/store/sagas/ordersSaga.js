import { call, put } from "redux-saga/effects";

import {
  makeOrderAPI,
  getOrdersInitialAPI,
  cancelOrderAPI,
} from "../../services/ordersAPI";

import {
  makeOrderFailed,
  makeOrderSucceed,
  fetchOrdersInitialSucceed,
  fetchOrdersInitialFailed,
  cancelOrderFailed,
  cancelOrderSucceed,
  fetchOrdersInitialRequested,
} from "../actions/ordersActions";

export function* makeOrder({ payload }) {
  try {
    yield call(makeOrderAPI, payload);
    yield put(makeOrderSucceed());
  } catch (error) {
    yield put(makeOrderFailed(error));
  }
}

export function* fetchOrdersInitial({ payload }) {
  try {
    const data = yield call(getOrdersInitialAPI, payload);
    yield put(fetchOrdersInitialSucceed(data));
  } catch (error) {
    yield put(fetchOrdersInitialFailed(error));
  }
}

export function* cancelOrder({ payload }) {
  try {
    yield call(cancelOrderAPI, payload);
    yield put(cancelOrderSucceed());
    yield put(fetchOrdersInitialRequested({ count: 25 }));
  } catch (error) {
    yield put(cancelOrderFailed(error));
  }
}
