import usersAdminPanel, { initialState } from "../usersAdminPanel";
import {
  fetchUsersAdminPanelInitialFailed,
  fetchUsersAdminPanelInitialRequested,
  fetchUsersAdminPanelInitialSucceed,
  fetchUsersAdminPanelNextFailed,
  fetchUsersAdminPanelNextRequested,
  fetchUsersAdminPanelNextSucceed,
} from "../../actions/usersAdminPanelActions";

const getPerfectInitialState = (initial, changed) => ({
  ...initial,
  ...changed,
});

describe("usersAdminPanel reducer", () => {
  it("should return initial state", () => {
    expect(usersAdminPanel(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchUsersAdminPanelInitialRequested", () => {
    expect(usersAdminPanel(initialState, fetchUsersAdminPanelInitialRequested())).toEqual(
      getPerfectInitialState(initialState, { loading: true })
    );
  });
  it("should handle fetchUsersAdminPanelInitialSucceed", () => {
    expect(
      usersAdminPanel(initialState, fetchUsersAdminPanelInitialSucceed({ users: [], allCount: 16 }))
    ).toEqual(
      getPerfectInitialState(initialState, {
        allCount: 16,
        users: [],
      })
    );
  });
  it("should handle fetchUsersAdminPanelInitialFailed", () => {
    expect(
      usersAdminPanel(initialState, fetchUsersAdminPanelInitialFailed({ message: "Error" }))
    ).toEqual(
      getPerfectInitialState(initialState, {
        error: "Error",
      })
    );
  });

  it("should handle fetchUsersAdminPanelNextRequested", () => {
    expect(usersAdminPanel(initialState, fetchUsersAdminPanelNextRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle fetchUsersAdminPanelNextSucceed", () => {
    expect(usersAdminPanel(initialState, fetchUsersAdminPanelNextSucceed({ users: [] }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        users: [],
        count: initialState.count + initialState.limit,
      })
    );
  });
  it("should handle fetchUsersAdminPanelNextFailed", () => {
    expect(
      usersAdminPanel(initialState, fetchUsersAdminPanelNextFailed({ message: "Error" }))
    ).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
      })
    );
  });
});
