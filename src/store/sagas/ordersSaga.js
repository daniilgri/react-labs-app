import { call, put, select } from "redux-saga/effects";

import {
  makeOrderAPI,
  getOrdersInitialAPI,
  cancelOrderAPI,
  getOrdersNextAPI,
} from "../../services/ordersAPI";

import {
  makeOrderFailed,
  makeOrderSucceed,
  fetchOrdersInitialSucceed,
  fetchOrdersInitialFailed,
  cancelOrderFailed,
  cancelOrderSucceed,
  fetchOrdersInitialRequested,
  fetchOrdersNextSucceed,
  fetchOrdersNextFailed,
} from "../actions/ordersActions";

export function* makeOrder({ payload }) {
  try {
    yield call(makeOrderAPI, payload);
    yield put(makeOrderSucceed());
  } catch (error) {
    yield put(makeOrderFailed(error));
  }
}

export function* fetchOrdersInitial() {
  try {
    const limit = yield select(state => state.orders.limit);
    const query = yield select(state => state.orders.query);
    const data = yield call(getOrdersInitialAPI, { limit, query });
    yield put(fetchOrdersInitialSucceed(data));
  } catch (error) {
    yield put(fetchOrdersInitialFailed(error));
  }
}

export function* fetchOrdersNext() {
  try {
    const limit = yield select(state => state.orders.limit);
    const query = yield select(state => state.orders.query);
    const orders = yield select(state => state.orders.orders);
    const data = yield call(getOrdersNextAPI, { limit, orders, query });
    yield put(fetchOrdersNextSucceed(data));
  } catch (error) {
    yield put(fetchOrdersNextFailed(error));
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
