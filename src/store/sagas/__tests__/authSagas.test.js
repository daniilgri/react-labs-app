import "firebase/storage";
import { runSaga } from "redux-saga";

import * as api from "../../../services/authAPI";
import {
  authCurrentUser,
  cancelRequestOnDelete,
  changeEmail,
  changePassword,
  requestOnDelete,
  signIn,
  signOut,
  signUp,
  updateProfile,
} from "../authSagas";
import {
  requestOnDeleteSucceed,
  requestOnDeleteFailed,
  cancelRequestOnDeleteSucceed,
  cancelRequestOnDeleteFailed,
  // authCurrentUserSucceed,
  // authCurrentUserFailed,
  authCurrentUserRequested,
  signInFailed,
  signInSucceed,
  signOutFailed,
  signOutSucceed,
  signUpFailed,
  signUpSucceed,
} from "../../actions/authActions";
import {
  updateProfileSucceed,
  updateProfileFailed,
  changeEmailSucceed,
  changeEmailFailed,
  changePasswordSucceed,
  changePasswordFailed,
} from "../../actions/profileActions";

describe("signUp saga", () => {
  it("should sign up and dispatch success action", async () => {
    const dispatched = [];
    const signUpApi = jest.spyOn(api, "signUpAPI").mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      signUp,
      {
        payload: {
          firstName: "firstName",
          lastName: "lastName",
          email: "email",
          password: "password",
        },
      }
    );

    expect(signUpApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([signUpSucceed()]);

    signUpApi.mockClear();
  });

  it("should sign up and dispatch error action", async () => {
    const dispatched = [];
    const signUpApi = jest.spyOn(api, "signUpAPI").mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      signUp,
      {
        payload: {
          firstName: "firstName",
          lastName: "lastName",
          email: "email",
          password: "password",
        },
      }
    );

    expect(signUpApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([signUpFailed()]);

    signUpApi.mockClear();
  });
});

describe("signIn saga", () => {
  it("should sign in and dispatch success action", async () => {
    const dispatched = [];
    const signInApi = jest.spyOn(api, "signInAPI").mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      signIn,
      {
        payload: {
          email: "email",
          password: "password",
        },
      }
    );

    expect(signInApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([signInSucceed()]);

    signInApi.mockClear();
  });

  it("should sign in and dispatch error action", async () => {
    const dispatched = [];
    const signInApi = jest.spyOn(api, "signInAPI").mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      signIn,
      {
        payload: {
          email: "email",
          password: "password",
        },
      }
    );

    expect(signInApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([signInFailed()]);

    signInApi.mockClear();
  });
});

describe("signOut saga", () => {
  it("should sign out and dispatch success action", async () => {
    const dispatched = [];
    const signOutApi = jest.spyOn(api, "signOutAPI").mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      signOut,
      {
        payload: {
          email: "email",
          password: "password",
        },
      }
    );

    expect(signOutApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([signOutSucceed()]);

    signOutApi.mockClear();
  });

  it("should sign out and dispatch error action", async () => {
    const dispatched = [];
    const signOutApi = jest.spyOn(api, "signOutAPI").mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      signOut,
      {
        payload: {
          email: "email",
          password: "password",
        },
      }
    );

    expect(signOutApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([signOutFailed()]);

    signOutApi.mockClear();
  });
});

describe("requestOnDelete saga", () => {
  it("should make request on delete user and dispatch success action", async () => {
    const dispatched = [];
    const requestOnDeleteApi = jest
      .spyOn(api, "requestOnDeleteAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      requestOnDelete,
      {
        payload: {
          uid: "dhk1",
        },
      }
    );

    expect(requestOnDeleteApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([requestOnDeleteSucceed()]);

    requestOnDeleteApi.mockClear();
  });

  it("should make request on delete user and dispatch error action", async () => {
    const dispatched = [];
    const requestOnDeleteApi = jest
      .spyOn(api, "requestOnDeleteAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      requestOnDelete,
      {
        payload: {
          uid: "dhk1",
        },
      }
    );

    expect(requestOnDeleteApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([requestOnDeleteFailed()]);

    requestOnDeleteApi.mockClear();
  });
});

describe("cancelRequestOnDelete saga", () => {
  it("should cancel request on delete user and dispatch success action", async () => {
    const dispatched = [];
    const cancelRequestOnDeleteApi = jest
      .spyOn(api, "cancelRequestOnDeleteAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      cancelRequestOnDelete,
      {
        payload: {
          uid: "dhk1",
        },
      }
    );

    expect(cancelRequestOnDeleteApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([cancelRequestOnDeleteSucceed()]);

    cancelRequestOnDeleteApi.mockClear();
  });

  it("should cancel request on delete user and dispatch error action", async () => {
    const dispatched = [];
    const cancelRequestOnDeleteApi = jest
      .spyOn(api, "cancelRequestOnDeleteAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      cancelRequestOnDelete,
      {
        payload: {
          uid: "dhk1",
        },
      }
    );

    expect(cancelRequestOnDeleteApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([cancelRequestOnDeleteFailed()]);

    cancelRequestOnDeleteApi.mockClear();
  });
});

describe("updateProfile saga", () => {
  it("should update user profile and dispatch success action", async () => {
    const dispatched = [];
    const updateProfileApi = jest
      .spyOn(api, "updateProfileAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      updateProfile,
      {
        payload: {
          firstName: "newFirstName",
        },
      }
    );

    expect(updateProfileApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([authCurrentUserRequested(), updateProfileSucceed()]);

    updateProfileApi.mockClear();
  });

  it("should update user profile and dispatch error action", async () => {
    const dispatched = [];
    const updateProfileApi = jest
      .spyOn(api, "updateProfileAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      updateProfile,
      {
        payload: {
          firstName: "newFirstName",
        },
      }
    );

    expect(updateProfileApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([updateProfileFailed()]);

    updateProfileApi.mockClear();
  });
});

describe("changeEmail saga", () => {
  it("should change user email and dispatch success action", async () => {
    const dispatched = [];
    const changeEmailApi = jest
      .spyOn(api, "changeEmailAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      changeEmail,
      {
        payload: {
          email: "email@gmail.com",
          password: "password",
        },
      }
    );

    expect(changeEmailApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([authCurrentUserRequested(), changeEmailSucceed()]);

    changeEmailApi.mockClear();
  });

  it("should change user email and dispatch error action", async () => {
    const dispatched = [];
    const changeEmailApi = jest
      .spyOn(api, "changeEmailAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      changeEmail,
      {
        payload: {
          email: "email@gmail.com",
          password: "password",
        },
      }
    );

    expect(changeEmailApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([changeEmailFailed()]);

    changeEmailApi.mockClear();
  });
});

describe("changePassword saga", () => {
  it("should change user password and dispatch success action", async () => {
    const dispatched = [];
    const changePasswordApi = jest
      .spyOn(api, "changePasswordAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      changePassword,
      {
        payload: {
          newPassword: "email@gmail.com",
          password: "password",
        },
      }
    );

    expect(changePasswordApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([changePasswordSucceed()]);

    changePasswordApi.mockClear();
  });

  it("should change user password and dispatch error action", async () => {
    const dispatched = [];
    const changePasswordApi = jest
      .spyOn(api, "changePasswordAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      changePassword,
      {
        payload: {
          newPassword: "email@gmail.com",
          password: "password",
        },
      }
    );

    expect(changePasswordApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([changePasswordFailed()]);

    changePasswordApi.mockClear();
  });
});

describe("authCurrentUser saga", () => {
  it("should authenticate user and dispatch success action", async () => {
    const fakeUser = {
      uid: "",
      email: "",
      firstName: "",
      lastName: "",
      requestOnDelete: "",
      role: "",
    };
    const dispatched = [];
    const getAuthChannelApi = jest
      .spyOn(api, "getAuthChannelAPI")
      .mockImplementation(() => Promise.resolve(fakeUser));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      authCurrentUser
    );

    expect(getAuthChannelApi).toHaveBeenCalledTimes(1);
    getAuthChannelApi.mockClear();
  });

  it("should authenticate user and dispatch error action", async () => {
    const dispatched = [];
    const getAuthChannelApi = jest
      .spyOn(api, "getAuthChannelAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      authCurrentUser
    );

    expect(getAuthChannelApi).toHaveBeenCalledTimes(1);
    getAuthChannelApi.mockClear();
  });
});
