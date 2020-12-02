import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchSubscribersInitialFailed,
  fetchSubscribersInitialSucceed,
  fetchSubscribersInitialRequested,
  fetchSubscribersNextFailed,
  fetchSubscribersNextRequested,
  fetchSubscribersNextSucceed,
} from "../actions/filmSubscribersActions";

const initialState = {
  loading: false,
  error: "",
  users: [],
  orders: [],
  limit: 6,
  count: 6,
  allCount: 0,
};

const usersAdminPanel = handleActions(
  {
    [fetchSubscribersInitialRequested]: produce(state => {
      state.loading = true;
    }),
    [fetchSubscribersInitialSucceed]: produce((state, { payload }) => {
      console.log(payload);
      state.loading = false;
      state.users = payload.users;
      state.allCount = payload.allCount;
      state.orders = payload.orders;
    }),
    [fetchSubscribersInitialFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
    [fetchSubscribersNextRequested]: produce(state => {
      state.loading = true;
    }),
    [fetchSubscribersNextSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.users = [...state.users, ...payload.users];
      state.count += state.limit;
    }),
    [fetchSubscribersNextFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default usersAdminPanel;
