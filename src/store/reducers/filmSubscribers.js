import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchSubscribersFailed,
  fetchSubscribersSucceed,
  fetchSubscribersRequested,
} from "../actions/filmSubscribersActions";

const initialState = {
  loading: false,
  error: "",
  users: [],
};

const usersAdminPanel = handleActions(
  {
    [fetchSubscribersRequested]: produce((state) => {
      state.loading = true;
    }),
    [fetchSubscribersSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.users = payload;
    }),
    [fetchSubscribersFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default usersAdminPanel;
