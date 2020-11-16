import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchOrdersInitialFailed,
  fetchOrdersInitialSucceed,
  fetchOrdersInitialRequested,
} from "../actions/ordersActions";

const initialState = {
  loading: false,
  error: "",
  orders: [],
};

const orders = handleActions(
  {
    [fetchOrdersInitialRequested]: produce((state) => {
      state.loading = true;
    }),
    [fetchOrdersInitialSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.orders = payload;
    }),
    [fetchOrdersInitialFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default orders;
