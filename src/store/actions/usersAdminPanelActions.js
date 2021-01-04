import { createAction } from "redux-actions";

export const fetchUsersAdminPanelInitialRequested = createAction(
  "@USERS_ADMIN_PANEL/FETCH_USERS_ADMIN_PANEL_INITIAL_REQUESTED"
);
export const fetchUsersAdminPanelInitialSucceed = createAction(
  "@USERS_ADMIN_PANEL/FETCH_USERS_ADMIN_PANEL_INITIAL_SUCCEED",
  payload => payload
);
export const fetchUsersAdminPanelInitialFailed = createAction(
  "@USERS_ADMIN_PANEL/FETCH_USERS_ADMIN_PANEL_INITIAL_FAILED",
  payload => payload
);

export const fetchUsersAdminPanelNextRequested = createAction(
  "@USERS_ADMIN_PANEL/FETCH_USERS_ADMIN_PANEL_NEXT_REQUESTED"
);
export const fetchUsersAdminPanelNextSucceed = createAction(
  "@USERS_ADMIN_PANEL/FETCH_USERS_ADMIN_PANEL_NEXT_SUCCEED",
  payload => payload
);
export const fetchUsersAdminPanelNextFailed = createAction(
  "@USERS_ADMIN_PANEL/FETCH_USERS_ADMIN_PANEL_NEXT_FAILED",
  payload => payload
);

export const deleteUserRequested = createAction(
  "@USERS_ADMIN_PANEL/DELETE_USER_REQUESTED",
  payload => payload
);
export const deleteUserSucceed = createAction("@USERS_ADMIN_PANEL/DELETE_USER_SUCCEED");
export const deleteUserFailed = createAction(
  "@USERS_ADMIN_PANEL/DELETE_USER_FAILED",
  payload => payload
);

export const setUsersSearchQuery = createAction(
  "@USERS_ADMIN_PANEL/SET_USERS_SEARCH_QUERY",
  payload => payload
);
