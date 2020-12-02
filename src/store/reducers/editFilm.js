import { handleActions } from "redux-actions";
import produce from "immer";

import {
  editFilmRequested,
  editFilmFailed,
  editFilmSucceed,
  fetchEditFilmRequested,
  fetchEditFilmSucceed,
  fetchEditFilmFailed,
} from "../actions/filmsAdminPanelActions";

const initialState = {
  loading: true,
  error: "",
  film: {},
};

const editFilm = handleActions(
  {
    [editFilmRequested]: produce(state => {
      state.loading = true;
    }),
    [editFilmSucceed]: produce(state => {
      state.loading = false;
    }),
    [editFilmFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
    [fetchEditFilmRequested]: produce(state => {
      state.loading = true;
    }),
    [fetchEditFilmSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.film = payload;
    }),
    [fetchEditFilmFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default editFilm;
