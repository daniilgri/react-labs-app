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

const getPerfectInitialState = (initial, changed) => ({
  ...initial,
  ...changed,
});

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
    expect(auth(initialState, signUpRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle signUpSucceed", () => {
    expect(auth(initialState, signUpSucceed())).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
      })
    );
  });
  it("should handle signUpFailed", () => {
    expect(auth(initialState, signUpFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
      })
    );
  });

  it("should handle signInRequested", () => {
    expect(auth(initialState, signInRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle signInSucceed", () => {
    expect(auth(initialState, signInSucceed())).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
      })
    );
  });
  it("should handle signInFailed", () => {
    expect(auth(initialState, signInFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error with login",
      })
    );
  });

  it("should handle signOutRequested", () => {
    expect(auth(fakeLoggedInInitialState, signOutRequested())).toEqual(
      getPerfectInitialState(initialState, {
        user: fakeUser,
        loading: true,
        loggedIn: true,
      })
    );
  });
  it("should handle signOutSucceed", () => {
    expect(auth(fakeLoggedInInitialState, signOutSucceed())).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        user: fakeUser,
        loggedIn: false,
      })
    );
  });
  it("should handle signOutFailed", () => {
    expect(auth(fakeLoggedInInitialState, signOutFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
        user: fakeUser,
        loggedIn: true,
      })
    );
  });

  it("should handle authCurrentUserRequested", () => {
    expect(auth(initialState, authCurrentUserRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle authCurrentUserSucceed", () => {
    expect(auth(initialState, authCurrentUserSucceed({ user: fakeUser, loggedIn: true }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        user: fakeUser,
        loggedIn: true,
      })
    );
  });
  it("should handle authCurrentUserFailed", () => {
    expect(auth(initialState, authCurrentUserFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
      })
    );
  });

  it("should handle requestOnDeleteRequested", () => {
    expect(auth(fakeLoggedInInitialState, requestOnDeleteRequested({ uid: "23qwqww12" }))).toEqual(
      getPerfectInitialState(fakeLoggedInInitialState, {
        loading: true,
      })
    );
  });
  it("should handle requestOnDeleteSucceed", () => {
    expect(auth(fakeLoggedInInitialState, requestOnDeleteSucceed())).toEqual(
      getPerfectInitialState(fakeLoggedInInitialState, {
        loading: false,
        user: fakeUserWithRequestOnDelete,
      })
    );
  });
  it("should handle requestOnDeleteFailed", () => {
    expect(auth(fakeLoggedInInitialState, requestOnDeleteFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(fakeLoggedInInitialState, {
        loading: false,
        error: "Error",
      })
    );
  });

  it("should handle cancelRequestOnDeleteRequested", () => {
    expect(
      auth(
        fakeInitialStateWithUserRequestOnDelete,
        cancelRequestOnDeleteRequested({ uid: "wdewfwj" })
      )
    ).toEqual(
      getPerfectInitialState(fakeInitialStateWithUserRequestOnDelete, {
        loading: true,
      })
    );
  });
  it("should handle cancelRequestOnDeleteSucceed", () => {
    expect(auth(fakeInitialStateWithUserRequestOnDelete, cancelRequestOnDeleteSucceed())).toEqual(
      getPerfectInitialState(fakeInitialStateWithUserRequestOnDelete, {
        loading: false,
        user: fakeUser,
      })
    );
  });
  it("should handle cancelRequestOnDeleteFailed", () => {
    expect(
      auth(
        fakeInitialStateWithUserRequestOnDelete,
        cancelRequestOnDeleteFailed({ message: "Error" })
      )
    ).toEqual(
      getPerfectInitialState(fakeInitialStateWithUserRequestOnDelete, {
        loading: false,
        error: "Error",
      })
    );
  });
});
