import { createAction } from "redux-actions";

export const addFilmRequested = createAction("@FILMS/ADD_FILM_REQUESTED");
export const addFilmSucceed = createAction("@FILMS/ADD_FILM_SUCCEED");
export const addFilmFailed = createAction(
  "@FILMS/ADD_FILM_FAILED",
  (payload) => payload
);

export const fetchFilmsInitialRequested = createAction(
  "@FILMS/FETCH_FILMS_INITIAL_REQUESTED"
);
export const fetchFilmsInitialSucceed = createAction(
  "@FILMS/FETCH_FILMS_INITIAL_SUCCEED",
  (payload) => payload
);
export const fetchFilmsInitialFailed = createAction(
  "@FILMS/FETCH_FILMS_INITIAL_FAILED",
  (payload) => payload
);

export const fetchFilmsNextRequested = createAction(
  "@FILMS/FETCH_FILMS_NEXT_REQUESTED"
);
export const fetchFilmsNextSucceed = createAction(
  "@FILMS/FETCH_FILMS_NEXT_SUCCEED",
  (payload) => payload
);
export const fetchFilmsNextFailed = createAction(
  "@FILMS/FETCH_FILMS_NEXT_FAILED",
  (payload) => payload
);

export const fetchFilmByIdRequested = createAction(
  "@FILMS/FETCH_FILM_BY_ID_REQUESTED",
  (payload) => payload
);
export const fetchFilmByIdSucceed = createAction(
  "@FILMS/FETCH_FILM_BY_ID_SUCCEED",
  (payload) => payload
);
export const fetchFilmByIdFailed = createAction(
  "@FILMS/FETCH_FILM_BY_ID_FAILED",
  (payload) => payload
);

export const updateFilmRatingRequested = createAction(
  "@FILMS/UPDATES_FILM_RATING_REQUESTED",
  (payload) => payload
);
export const updateFilmRatingSucceed = createAction(
  "@FILMS/UPDATES_FILM_RATING_SUCCEED"
);
export const updateFilmRatingFailed = createAction(
  "@FILMS/UPDATES_FILM_RATING_FAILED",
  (payload) => payload
);

export const setFilmsSearchQuery = createAction(
  "@FILMS/SET_FILMS_SEARCH_QUERY",
  (payload) => payload
);
