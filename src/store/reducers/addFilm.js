import { handleActions } from "redux-actions";
import produce from "immer";

import {
  addFilmRequested,
  addFilmSucceed,
  addFilmFailed,
} from "../actions/filmsAdminPanelActions";

const initialState = {
  loading: false,
  error: "",
};

const addFilm = handleActions(
  {
    [addFilmRequested]: produce((state) => {
      state.loading = true;
    }),
    [addFilmSucceed]: produce((state) => {
      state.loading = false;
    }),
    [addFilmFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default addFilm;
