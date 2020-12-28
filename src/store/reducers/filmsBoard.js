import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchFilmsInitialRequested,
  fetchFilmsInitialFailed,
  fetchFilmsInitialSucceed,
  fetchFilmsNextRequested,
  fetchFilmsNextFailed,
  fetchFilmsNextSucceed,
  setFilmsSearchQuery,
} from "../actions/filmsActions";

export const initialState = {
  loading: false,
  error: "",
  films: [],
  limit: 6,
  allCount: 0,
  count: 6,
  query: "",
};

const filmsBoard = handleActions(
  {
    [fetchFilmsInitialRequested]: produce(state => {
      state.loading = true;
      state.films = [];
      state.allCount = 0;
      state.error = "";
    }),
    [fetchFilmsInitialSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.allCount = payload.allCount;
      state.films = payload.films;
    }),
    [fetchFilmsInitialFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
    [fetchFilmsNextRequested]: produce(state => {
      state.loading = true;
    }),
    [fetchFilmsNextSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.films = [...state.films, ...payload.films];
      state.count += state.limit;
    }),
    [fetchFilmsNextFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
    [setFilmsSearchQuery]: produce((state, { payload }) => {
      state.query = payload;
      state.loading = true;
      state.films = [];
      state.allCount = 0;
      state.error = "";
    }),
  },
  initialState
);

export default filmsBoard;
