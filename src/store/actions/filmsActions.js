import { createAction } from "redux-actions";

export const addFilmRequested = createAction("@FILMS/ADD_FILM_REQUESTED");
export const addFilmSucceed = createAction("@FILMS/ADD_FILM_SUCCEED");
export const addFilmFailed = createAction(
  "@FILMS/ADD_FILM_FAILED",
  (payload) => payload
);

export const fetchFilmsInitialRequested = createAction(
  "@FILMS/FETCH_FILMS_INITIAL_REQUESTED",
  (payload) => payload
);
export const fetchFilmsInitialSucceed = createAction(
  "@FILMS/FETCH_FILMS_INITIAL_SUCCEED",
  (payload) => payload
);
export const fetchFilmsInitialFailed = createAction(
  "@FILMS/FETCH_FILMS_INITIAL_FAILED",
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
