import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchFilmByIdAdminPanelFailed,
  fetchFilmByIdAdminPanelRequested,
  fetchFilmByIdAdminPanelSucceed,
} from "../actions/filmsAdminPanelActions";

export const emptyFilm = {
  title: "",
  description: "",
  tags: [],
  image: "",
  rates: [],
  screeningDates: [],
  ticketPrice: "",
};

export const initialState = {
  loading: false,
  error: "",
  film: emptyFilm,
};

const filmCardAdminPanel = handleActions(
  {
    [fetchFilmByIdAdminPanelRequested]: produce(state => {
      state.loading = true;
    }),
    [fetchFilmByIdAdminPanelSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.film = payload;
    }),
    [fetchFilmByIdAdminPanelFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default filmCardAdminPanel;
