import auth, { initialState, emptyUser } from "../auth";
import {
  authCurrentUserFailed,
  authCurrentUserRequested,
  authCurrentUserSucceed,
  signInFailed,
  signInRequested,
  signInSucceed,
  signOutFailed,
  signOutRequested,
  signOutSucceed,
  signUpFailed,
  signUpRequested,
  signUpSucceed,
  requestOnDeleteRequested,
  requestOnDeleteFailed,
  requestOnDeleteSucceed,
  cancelRequestOnDeleteSucceed,
  cancelRequestOnDeleteRequested,
  cancelRequestOnDeleteFailed,
} from "../../actions/authActions";

describe("auth reducer", () => {
  let fakeUser;
  let fakeLoggedInInitialState;
  let fakeUserWithRequestOnDelete;
  let fakeInitialStateWithUserRequestOnDelete;

  beforeEach(() => {
    fakeUser = emptyUser;
    fakeLoggedInInitialState = { ...initialState, loggedIn: true };
    fakeUserWithRequestOnDelete = { ...fakeUser, requestOnDelete: true };
    fakeInitialStateWithUserRequestOnDelete = {
      ...fakeLoggedInInitialState,
      user: fakeUserWithRequestOnDelete,
    };
  });

  it("should return initial state", () => {
    expect(auth(undefined, {})).toEqual(initialState);
  });

  it("should handle signUpRequested", () => {
    expect(auth(initialState, signUpRequested())).toEqual({
      loading: true,
      user: fakeUser,
      error: "",
      loggedIn: false,
    });
  });
  it("should handle signUpSucceed", () => {
    expect(auth(initialState, signUpSucceed())).toEqual({
      loading: false,
      user: fakeUser,
      error: "",
      loggedIn: false,
    });
  });
  it("should handle signUpFailed", () => {
    expect(auth(initialState, signUpFailed({ message: "Error" }))).toEqual({
      loading: false,
      user: fakeUser,
      error: "Error",
      loggedIn: false,
    });
  });

  it("should handle signInSucceed", () => {
    expect(auth(initialState, signInRequested())).toEqual({
      loading: true,
      user: fakeUser,
      error: "",
      loggedIn: false,
    });
  });
  it("should handle signInSucceed", () => {
    expect(auth(initialState, signInSucceed())).toEqual({
      loading: false,
      user: fakeUser,
      error: "",
      loggedIn: false,
    });
  });
  it("should handle signInFailed", () => {
    expect(auth(initialState, signInFailed({ message: "Error" }))).toEqual({
      loading: false,
      user: fakeUser,
      error: "Error",
      loggedIn: false,
    });
  });

  it("should handle signOutRequested", () => {
    expect(auth(fakeLoggedInInitialState, signOutRequested())).toEqual({
      user: fakeUser,
      loading: true,
      error: "",
      loggedIn: true,
    });
  });
  it("should handle signOutSucceed", () => {
    expect(auth(fakeLoggedInInitialState, signOutSucceed())).toEqual({
      loading: false,
      user: fakeUser,
      error: "",
      loggedIn: false,
    });
  });
  it("should handle signOutFailed", () => {
    expect(auth(fakeLoggedInInitialState, signOutFailed({ message: "Error" }))).toEqual({
      loading: false,
      error: "Error",
      user: fakeUser,
      loggedIn: true,
    });
  });

  it("should handle authCurrentUserRequested", () => {
    expect(auth(initialState, authCurrentUserRequested())).toEqual({
      loading: true,
      user: fakeUser,
      error: "",
      loggedIn: false,
    });
  });
  it("should handle authCurrentUserSucceed", () => {
    expect(auth(initialState, authCurrentUserSucceed(fakeUser))).toEqual({
      error: "",
      loading: false,
      user: fakeUser,
      loggedIn: true,
    });
  });
  it("should handle authCurrentUserFailed", () => {
    expect(auth(initialState, authCurrentUserFailed({ message: "Error" }))).toEqual({
      loading: false,
      user: fakeUser,
      error: "Error",
      loggedIn: false,
    });
  });

  it("should handle requestOnDeleteRequested", () => {
    expect(auth(fakeLoggedInInitialState, requestOnDeleteRequested({ uid: "23qwqww12" }))).toEqual({
      loading: true,
      user: fakeUser,
      error: "",
      loggedIn: true,
    });
  });
  it("should handle requestOnDeleteSucceed", () => {
    expect(auth(fakeLoggedInInitialState, requestOnDeleteSucceed())).toEqual({
      loading: false,
      user: fakeUserWithRequestOnDelete,
      error: "",
      loggedIn: true,
    });
  });
  it("should handle requestOnDeleteFailed", () => {
    expect(auth(fakeLoggedInInitialState, requestOnDeleteFailed({ message: "Error" }))).toEqual({
      loading: false,
      user: fakeUser,
      error: "Error",
      loggedIn: true,
    });
  });

  it("should handle cancelRequestOnDeleteRequested", () => {
    expect(
      auth(
        fakeInitialStateWithUserRequestOnDelete,
        cancelRequestOnDeleteRequested({ uid: "wdewfwj" })
      )
    ).toEqual({
      loading: true,
      user: fakeUserWithRequestOnDelete,
      error: "",
      loggedIn: true,
    });
  });
  it("should handle cancelRequestOnDeleteSucceed", () => {
    expect(auth(fakeInitialStateWithUserRequestOnDelete, cancelRequestOnDeleteSucceed())).toEqual({
      loading: false,
      user: fakeUser,
      error: "",
      loggedIn: true,
    });
  });
  it("should handle cancelRequestOnDeleteFailed", () => {
    expect(
      auth(
        fakeInitialStateWithUserRequestOnDelete,
        cancelRequestOnDeleteFailed({ message: "Error" })
      )
    ).toEqual({
      loading: false,
      user: fakeUserWithRequestOnDelete,
      error: "Error",
      loggedIn: true,
    });
  });
});
