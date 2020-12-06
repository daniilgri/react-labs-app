import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchFilmsAdminPanelInitialRequested,
  fetchFilmsAdminPanelInitialFailed,
  fetchFilmsAdminPanelInitialSucceed,
  fetchFilmsAdminPanelNextFailed,
  fetchFilmsAdminPanelNextRequested,
  fetchFilmsAdminPanelNextSucceed,
} from "../actions/filmsAdminPanelActions";

export const initialState = {
  loading: false,
  error: "",
  films: [],
  limit: 4,
  allCount: 0,
  count: 4,
  query: "",
};

const filmsAdminPanel = handleActions(
  {
    [fetchFilmsAdminPanelInitialRequested]: produce(state => {
      state.loading = true;
    }),
    [fetchFilmsAdminPanelInitialSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.films = payload.films;
      state.allCount = payload.allCount;
    }),
    [fetchFilmsAdminPanelInitialFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
    [fetchFilmsAdminPanelNextRequested]: produce(state => {
      state.loading = true;
    }),
    [fetchFilmsAdminPanelNextSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.films = [...state.films, ...payload.films];
      state.count += state.limit;
    }),
    [fetchFilmsAdminPanelNextFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default filmsAdminPanel;
