import { createAction } from "redux-actions";

export const fetchFilmsAdminPanelInitialRequested = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILMS_ADMIN_PANEL_INITIAL_REQUESTED",
  (payload) => payload
);
export const fetchFilmsAdminPanelInitialSucceed = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILMS_ADMIN_PANEL_INITIAL_SUCCEED",
  (payload) => payload
);
export const fetchFilmsAdminPanelInitialFailed = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILMS_ADMIN_PANEL_INITIAL_FAILED",
  (payload) => payload
);

export const deleteFilmRequested = createAction(
  "@FILMS_ADMIN_PANEL/DELETE_FILM_REQUESTED",
  (payload) => payload
);
export const deleteFilmSucceed = createAction(
  "@FILMS_ADMIN_PANEL/DELETE_FILM_SUCCEED"
);
export const deleteFilmFailed = createAction(
  "@FILMS_ADMIN_PANEL/DELETE_FILM_FAILED",
  (payload) => payload
);
