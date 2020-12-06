import { handleActions } from "redux-actions";
import produce from "immer";

import { makeOrderFailed, makeOrderSucceed, makeOrderRequested } from "../actions/ordersActions";

export const initialState = {
  loading: false,
  error: "",
};

const newOrder = handleActions(
  {
    [makeOrderRequested]: produce(state => {
      state.loading = true;
    }),
    [makeOrderSucceed]: produce(state => {
      state.loading = false;
    }),
    [makeOrderFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default newOrder;
