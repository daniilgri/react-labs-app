import { createAction } from "redux-actions";

export const fetchUsersAdminPanelInitialRequested = createAction(
  "@FILMS/FETCH_USERS_ADMIN_PANEL_INITIAL_REQUESTED",
  (payload) => payload
);
export const fetchUsersAdminPanelInitialSucceed = createAction(
  "@FILMS/FETCH_USERS_ADMIN_PANEL_INITIAL_SUCCEED",
  (payload) => payload
);
export const fetchUsersAdminPanelInitialFailed = createAction(
  "@FILMS/FETCH_USERS_ADMIN_PANEL_INITIAL_FAILED",
  (payload) => payload
);
