import { handleActions } from "redux-actions";
import produce from "immer";
import {
  signUpRequested,
  signUpFailed,
  signUpSucceed,
  signInFailed,
  signInRequested,
  signInSucceed,
  authCurrentUserFailed,
  authCurrentUserSucceed,
  authCurrentUserRequested,
} from "../actions/authActions";

const initialState = { loading: false, user: null, error: "" };

const auth = handleActions(
  {
    [signUpRequested]: produce((state) => {
      state.loading = true;
    }),
    [signUpSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.user = payload;
    }),
    [signUpFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),

    [signInRequested]: produce((state) => {
      state.loading = true;
    }),
    [signInSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.user = payload;
    }),
    [signInFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),

    [authCurrentUserSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.user = payload;
    }),
    [authCurrentUserFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default auth;
