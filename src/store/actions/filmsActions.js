import { createAction } from "redux-actions";

export const addFilmRequested = createAction("@FILMS/ADD_FILM_REQUESTED");
export const addFilmSucceed = createAction("@FILMS/ADD_FILM_SUCCEED");
export const addFilmFailed = createAction("@FILMS/ADD_FILM_FAILED");

export const fetchFilmsInitialRequested = createAction(
  "@FILMS/FETCH_FILMS_INITIAL_REQUESTED"
);
export const fetchFilmsInitialSucceed = createAction(
  "@FILMS/FETCH_FILMS_INITIAL_SUCCEED"
);
export const fetchFilmsInitialFailed = createAction(
  "@FILMS/FETCH_FILMS_INITIAL_FAILED"
);
