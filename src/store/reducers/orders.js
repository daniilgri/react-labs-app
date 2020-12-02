import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchOrdersInitialFailed,
  fetchOrdersInitialSucceed,
  fetchOrdersInitialRequested,
  fetchOrdersNextRequested,
  fetchOrdersNextFailed,
  fetchOrdersNextSucceed,
} from "../actions/ordersActions";

const initialState = {
  loading: false,
  error: "",
  orders: [],
  limit: 6,
  allCount: 0,
  count: 6,
  query: "",
};

const orders = handleActions(
  {
    [fetchOrdersInitialRequested]: produce(state => {
      state.loading = true;
    }),
    [fetchOrdersInitialSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.orders = payload.orders;
      state.allCount = payload.allCount;
    }),
    [fetchOrdersInitialFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
    [fetchOrdersNextRequested]: produce(state => {
      state.loading = true;
    }),
    [fetchOrdersNextSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.orders = [...state.orders, ...payload.orders];
      state.count += state.limit;
    }),
    [fetchOrdersNextFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default orders;
