import { handleActions } from "redux-actions";
import produce from "immer";

import {
  fetchFilmByIdFailed,
  fetchFilmByIdRequested,
  fetchFilmByIdSucceed,
} from "../actions/filmsActions";

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

const filmCard = handleActions(
  {
    [fetchFilmByIdRequested]: produce(state => {
      state.loading = true;
    }),
    [fetchFilmByIdSucceed]: produce((state, { payload }) => {
      state.film = payload;
      state.loading = false;
    }),
    [fetchFilmByIdFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default filmCard;
