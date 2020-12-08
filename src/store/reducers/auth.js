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
  requestOnDeleteFailed,
  requestOnDeleteRequested,
  requestOnDeleteSucceed,
  cancelRequestOnDeleteFailed,
  cancelRequestOnDeleteRequested,
  cancelRequestOnDeleteSucceed,
} from "../actions/authActions";

export const emptyUser = {
  uid: "",
  firstName: "",
  lastName: "",
  email: "",
  role: "guest",
  requestOnDelete: false,
};

export const initialState = {
  loading: false,
  user: emptyUser,
  loggedIn: false,
  error: "",
};

const auth = handleActions(
  {
    [signUpRequested]: produce(state => {
      state.loading = true;
    }),
    [signUpSucceed]: produce(state => {
      state.loading = false;
    }),
    [signUpFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),

    [signInRequested]: produce(state => {
      state.loading = true;
    }),
    [signInSucceed]: produce(state => {
      state.loading = false;
    }),
    [signInFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),

    [signOutRequested]: produce(state => {
      state.loading = true;
    }),
    [signOutSucceed]: produce(state => {
      state.loading = false;
      state.user = emptyUser;
      state.loggedIn = false;
    }),
    [signOutFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),

    [authCurrentUserRequested]: produce(state => {
      state.loading = true;
    }),
    [authCurrentUserSucceed]: produce((state, { payload }) => {
      state.loading = false;
      state.user = payload;
      state.loggedIn = true;
    }),
    [authCurrentUserFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),

    [requestOnDeleteRequested]: produce(state => {
      state.loading = true;
    }),
    [requestOnDeleteSucceed]: produce(state => {
      state.loading = false;
      state.user.requestOnDelete = true;
    }),
    [requestOnDeleteFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),

    [cancelRequestOnDeleteRequested]: produce(state => {
      state.loading = true;
    }),
    [cancelRequestOnDeleteSucceed]: produce(state => {
      state.loading = false;
      state.user.requestOnDelete = false;
    }),
    [cancelRequestOnDeleteFailed]: produce((state, { payload: { message } }) => {
      state.loading = false;
      state.error = message;
    }),
  },
  initialState
);

export default auth;
