import { createAction } from "redux-actions";

export const signUpRequested = createAction(
  "@AUTH/SIGN_UP_REQUESTED",
  (payload) => payload
);
export const signUpSucceed = createAction(
  "@AUTH/SIGN_UP_SUCCEED",
  (payload) => payload
);
export const signUpFailed = createAction(
  "@AUTH/SIGN_UP_FAILED",
  (payload) => payload
);

export const signInRequested = createAction(
  "@AUTH/SIGN_IN_REQUESTED",
  (payload) => payload
);
export const signInSucceed = createAction(
  "@AUTH/SIGN_IN_SUCCEED",
  (payload) => payload
);
export const signInFailed = createAction(
  "@AUTH/SIGN_IN_FAILED",
  (payload) => payload
);

export const authCurrentUserSucceed = createAction(
  "@AUTH/AUTH_CURRENT_USER_SUCCEED",
  (payload) => payload
);
export const authCurrentUserFailed = createAction(
  "@AUTH/AUTH_CURRENT_USER_FAILED",
  (payload) => payload
);
export const authCurrentUserRequested = createAction(
  "@AUTH/AUTH_CURRENT_USER_REQUESTED"
);

export const signOutRequested = createAction("@AUTH/SIGN_OUT_REQUESTED");

export const signOutSucceed = createAction("@AUTH/SIGN_OUT_SUCCEED");

export const signOutFailed = createAction(
  "@AUTH/SIGN_OUT_FAILED",
  (payload) => payload
);
