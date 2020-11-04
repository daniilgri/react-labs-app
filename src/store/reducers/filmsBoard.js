import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchFilmsInitialRequested,
  fetchFilmsInitialFailed,
  fetchFilmsInitialSucceed,
} from "../actions/filmsActions";

const initialState = {
  loading: false,
  error: "",
  films: [],
};

const filmsBoard = handleActions(
  {
    [fetchFilmsInitialRequested]: produce((state) => {
      state.loading = true;
    }),
    [fetchFilmsInitialSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.films = payload;
    }),
    [fetchFilmsInitialFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default filmsBoard;