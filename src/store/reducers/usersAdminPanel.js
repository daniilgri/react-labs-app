import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchUsersAdminPanelInitialFailed,
  fetchUsersAdminPanelInitialRequested,
  fetchUsersAdminPanelInitialSucceed,
  fetchUsersAdminPanelNextFailed,
  fetchUsersAdminPanelNextRequested,
  fetchUsersAdminPanelNextSucceed,
} from "../actions/usersAdminPanelActions";

const initialState = {
  loading: false,
  error: "",
  users: [],
  limit: 4,
  allCount: 0,
  count: 4,
  query: "",
};

const usersAdminPanel = handleActions(
  {
    [fetchUsersAdminPanelInitialRequested]: produce((state) => {
      state.loading = true;
    }),
    [fetchUsersAdminPanelInitialSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.allCount = payload.allCount;
      state.users = payload.users;
    }),
    [fetchUsersAdminPanelInitialFailed]: produce(
      (state, { payload: { message } }) => {
        state.loading = false;
        state.error = message;
      }
    ),
    [fetchUsersAdminPanelNextRequested]: produce((state) => {
      state.loading = true;
    }),
    [fetchUsersAdminPanelNextSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.users = [...state.users, ...payload.users];
      state.count += state.limit;
    }),
    [fetchUsersAdminPanelNextFailed]: produce(
      (state, { payload: { message } }) => {
        state.loading = false;
        state.error = message;
      }
    ),
  },
  initialState
);

export default usersAdminPanel;
