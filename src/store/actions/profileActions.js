import { createAction } from "redux-actions";

export const updateProfileRequested = createAction(
  "@PROFILE/UPDATE_PROFILE_REQUESTED",
  payload => payload
);
export const updateProfileSucceed = createAction("@PROFILE/UPDATE_PROFILE_SUCCEED");
export const updateProfileFailed = createAction(
  "@PROFILE/UPDATE_PROFILE_FAILED",
  payload => payload
);

export const changeEmailRequested = createAction(
  "@PROFILE/CHANGE_EMAIL_REQUESTED",
  payload => payload
);
export const changeEmailSucceed = createAction("@PROFILE/CHANGE_EMAIL_SUCCEED");
export const changeEmailFailed = createAction("@PROFILE/CHANGE_EMAIL_FAILED", payload => payload);

export const changePasswordRequested = createAction(
  "@PROFILE/CHANGE_PASSWORD_REQUESTED",
  payload => payload
);
export const changePasswordSucceed = createAction("@PROFILE/CHANGE_PASSWORD_SUCCEED");
export const changePasswordFailed = createAction(
  "@PROFILE/CHANGE_PASSWORD_FAILED",
  payload => payload
);
