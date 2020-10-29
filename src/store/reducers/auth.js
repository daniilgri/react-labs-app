import { handleActions } from "redux-actions";
import produce from "immer";
import {
  signUpRequested,
  signUpFailed,
  signUpSucceed,
  signInFailed,
  signInRequested,
  signInSucceed,
} from "../actions/authActions";

const initialState = { loading: false, user: {}, error: "" };

const auth = handleActions(
  {
    [signUpRequested]: produce((state) => {
      state.loading = true;
    }),
    [signUpSucceed]: produce((state, { payload }) => {
      state.loading = false;
      console.log(payload);
      state.user = payload;
    }),
    [signUpFailed]: produce((state, { payload }) => {
      state.loading = false;
      state.error = payload;
    }),
  },
  initialState
);

export default auth;
