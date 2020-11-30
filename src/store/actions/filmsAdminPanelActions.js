import { createAction } from "redux-actions";

export const fetchFilmsAdminPanelInitialRequested = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILMS_ADMIN_PANEL_INITIAL_REQUESTED"
);
export const fetchFilmsAdminPanelInitialSucceed = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILMS_ADMIN_PANEL_INITIAL_SUCCEED",
  (payload) => payload
);
export const fetchFilmsAdminPanelInitialFailed = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILMS_ADMIN_PANEL_INITIAL_FAILED",
  (payload) => payload
);

export const fetchFilmsAdminPanelNextRequested = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILMS_ADMIN_PANEL_NEXT_REQUESTED"
);
export const fetchFilmsAdminPanelNextSucceed = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILMS_ADMIN_PANEL_NEXT_SUCCEED",
  (payload) => payload
);
export const fetchFilmsAdminPanelNextFailed = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILMS_ADMIN_PANEL_NEXT_FAILED",
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

export const fetchFilmByIdAdminPanelRequested = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILM_BY_ID_ADMIN_PANEL_REQUESTED",
  (payload) => payload
);
export const fetchFilmByIdAdminPanelSucceed = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILM_BY_ID_ADMIN_PANEL_SUCCEED",
  (payload) => payload
);
export const fetchFilmByIdAdminPanelFailed = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_FILM_BY_ID_ADMIN_PANEL_FAILED",
  (payload) => payload
);

export const addFilmRequested = createAction(
  "@FILMS_ADMIN_PANEL/ADD_FILM_REQUESTED",
  (payload) => payload
);
export const addFilmSucceed = createAction(
  "@FILMS_ADMIN_PANEL/ADD_FILM_SUCCEED"
);
export const addFilmFailed = createAction(
  "@FILMS_ADMIN_PANEL/ADD_FILM_FAILED",
  (payload) => payload
);

export const editFilmRequested = createAction(
  "@FILMS_ADMIN_PANEL/EDIT_FILM_REQUESTED",
  (payload) => payload
);
export const editFilmSucceed = createAction(
  "@FILMS_ADMIN_PANEL/EDIT_FILM_SUCCEED"
);
export const editFilmFailed = createAction(
  "@FILMS_ADMIN_PANEL/EDIT_FILM_FAILED",
  (payload) => payload
);

export const fetchEditFilmRequested = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_EDIT_FILM_REQUESTED",
  (payload) => payload
);
export const fetchEditFilmSucceed = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_EDIT_FILM_SUCCEED"
);
export const fetchEditFilmFailed = createAction(
  "@FILMS_ADMIN_PANEL/FETCH_EDIT_FILM_FAILED"
);
