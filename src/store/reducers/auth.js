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
  signOutFailed,
  signOutRequested,
  signOutSucceed,
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

    [signOutRequested]: produce((state) => {
      state.loading = true;
    }),
    [signOutSucceed]: produce((state) => {
      state.loading = false;
    }),
    [signOutFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),

    [authCurrentUserRequested]: produce((state, { payload }) => {
      state.loading = true;
    }),
    [authCurrentUserSucceed]: produce((state, { payload }) => {
      state.loading = false;
      console.log(payload);
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
