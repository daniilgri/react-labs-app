import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchUsersAdminPanelInitialFailed,
  fetchUsersAdminPanelInitialRequested,
  fetchUsersAdminPanelInitialSucceed,
} from "../actions/usersAdminPanelActions.js";

const initialState = {
  loading: false,
  error: "",
  users: [],
};

const usersAdminPanel = handleActions(
  {
    [fetchUsersAdminPanelInitialRequested]: produce((state) => {
      state.loading = true;
    }),
    [fetchUsersAdminPanelInitialSucceed]: produce((state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.users = payload;
    }),
    [fetchUsersAdminPanelInitialFailed]: produce(
      (state, { payload: { message } }) => {
        state.loading = false;
        state.error = message;
      }
    ),
  },
  initialState
);

export default usersAdminPanel;
