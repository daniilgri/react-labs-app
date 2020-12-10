import "firebase/storage";
import { runSaga } from "redux-saga";

import * as api from "../../../services/usersAPI";
import {
  fetchUsersAdminPanelInitial,
  fetchUsersAdminPanelNext,
  deleteUser,
} from "../usersAdminPanelSagas";
import {
  fetchUsersAdminPanelInitialSucceed,
  fetchUsersAdminPanelInitialRequested,
  fetchUsersAdminPanelInitialFailed,
  fetchUsersAdminPanelNextSucceed,
  fetchUsersAdminPanelNextFailed,
  deleteUserSucceed,
  deleteUserFailed,
} from "../../actions/usersAdminPanelActions";

describe("fetchUsersAdminPanelInitial saga", () => {
  it("should fetch users initial and dispatch success action", async () => {
    const fakeUsersData = {
      users: [{ firstName: "firstName" }],
      allCount: 1,
    };
    const dispatched = [];
    const getUsersInitialApi = jest
      .spyOn(api, "getUsersInitialAPI")
      .mockImplementation(() => Promise.resolve(fakeUsersData));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ usersAdminPanel: { limit: 4 } }),
      },
      fetchUsersAdminPanelInitial,
      []
    );

    expect(getUsersInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchUsersAdminPanelInitialSucceed(fakeUsersData)]);

    getUsersInitialApi.mockClear();
  });
  it("should fetch users initial and dispatch error action", async () => {
    const dispatched = [];
    const getUsersInitialApi = jest
      .spyOn(api, "getUsersInitialAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ usersAdminPanel: { limit: 4 } }),
      },
      fetchUsersAdminPanelInitial,
      []
    );

    expect(getUsersInitialApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchUsersAdminPanelInitialFailed()]);

    getUsersInitialApi.mockClear();
  });
});

describe("fetchUsersAdminPanelNext saga", () => {
  it("should fetch users next and dispatch success action", async () => {
    const fakeUsersData = {
      users: [{ firstName: "firstName" }],
    };
    const dispatched = [];
    const getUsersNextApi = jest
      .spyOn(api, "getUsersNextAPI")
      .mockImplementation(() => Promise.resolve(fakeUsersData));

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ usersAdminPanel: { limit: 4, users: [{ firstName: "firstName" }] } }),
      },
      fetchUsersAdminPanelNext,
      []
    );

    expect(getUsersNextApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchUsersAdminPanelNextSucceed(fakeUsersData)]);

    getUsersNextApi.mockClear();
  });

  it("should fetch users next and dispatch error action", async () => {
    const dispatched = [];
    const getUsersNextApi = jest
      .spyOn(api, "getUsersNextAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
        getState: () => ({ usersAdminPanel: { limit: 4, users: [{ firstName: "firstName" }] } }),
      },
      fetchUsersAdminPanelNext,
      []
    );

    expect(getUsersNextApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([fetchUsersAdminPanelNextFailed()]);

    getUsersNextApi.mockClear();
  });
});

describe("deleteUser saga", () => {
  it("should delete user and dispatch success action", async () => {
    const dispatched = [];
    const deleteUserApi = jest
      .spyOn(api, "deleteUserAPI")
      .mockImplementation(() => Promise.resolve());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      deleteUser,
      [
        {
          userUid: "joooj",
        },
      ]
    );

    expect(deleteUserApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([deleteUserSucceed(), fetchUsersAdminPanelInitialRequested()]);

    deleteUserApi.mockClear();
  });

  it("should delete user and dispatch error action", async () => {
    const dispatched = [];
    const deleteUserApi = jest
      .spyOn(api, "deleteUserAPI")
      .mockImplementation(() => Promise.reject());

    await runSaga(
      {
        dispatch: action => dispatched.push(action),
      },
      deleteUser,
      [
        {
          userUid: "joooj",
        },
      ]
    );

    expect(deleteUserApi).toHaveBeenCalledTimes(1);
    expect(dispatched).toEqual([deleteUserFailed()]);

    deleteUserApi.mockClear();
  });
});
