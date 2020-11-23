import { createAction } from "redux-actions";

export const fetchUsersAdminPanelInitialRequested = createAction(
  "@USERS_ADMIN_PANEL/FETCH_USERS_ADMIN_PANEL_INITIAL_REQUESTED",
  (payload) => payload
);
export const fetchUsersAdminPanelInitialSucceed = createAction(
  "@USERS_ADMIN_PANEL/FETCH_USERS_ADMIN_PANEL_INITIAL_SUCCEED",
  (payload) => payload
);
export const fetchUsersAdminPanelInitialFailed = createAction(
  "@USERS_ADMIN_PANEL/FETCH_USERS_ADMIN_PANEL_INITIAL_FAILED",
  (payload) => payload
);

export const deleteUserRequested = createAction(
  "@USERS_ADMIN_PANEL/DELETE_USER_REQUESTED",
  (payload) => payload
);
export const deleteUserSucceed = createAction(
  "@USERS_ADMIN_PANEL/DELETE_USER_SUCCEED"
);
export const deleteUserFailed = createAction(
  "@USERS_ADMIN_PANEL/DELETE_USER_FAILED",
  (payload) => payload
);
