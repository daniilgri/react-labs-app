import filmsAdminPanel, { initialState } from "../filmsAdminPanel";
import {
  fetchFilmsAdminPanelInitialRequested,
  fetchFilmsAdminPanelInitialFailed,
  fetchFilmsAdminPanelInitialSucceed,
  fetchFilmsAdminPanelNextFailed,
  fetchFilmsAdminPanelNextRequested,
  fetchFilmsAdminPanelNextSucceed,
} from "../../actions/filmsAdminPanelActions";

describe("filmsAdminPanel reducer", () => {
  it("should return initial state", () => {
    expect(filmsAdminPanel(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchFilmsAdminPanelInitialRequested", () => {
    expect(filmsAdminPanel(initialState, fetchFilmsAdminPanelInitialRequested())).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it("should handle fetchFilmsAdminPanelInitialSucceed", () => {
    expect(
      filmsAdminPanel(initialState, fetchFilmsAdminPanelInitialSucceed({ films: [], allCount: 16 }))
    ).toEqual({
      ...initialState,
      loading: false,
      films: [],
      allCount: 16,
    });
  });
  it("should handle fetchFilmsAdminPanelInitialFailed", () => {
    expect(
      filmsAdminPanel(initialState, fetchFilmsAdminPanelInitialFailed({ message: "Error" }))
    ).toEqual({
      ...initialState,
      loading: false,
      error: "Error",
    });
  });

  it("should handle fetchFilmsAdminPanelNextRequested", () => {
    expect(filmsAdminPanel(initialState, fetchFilmsAdminPanelNextRequested())).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it("should handle fetchFilmsAdminPanelNextSucceed", () => {
    expect(filmsAdminPanel(initialState, fetchFilmsAdminPanelNextSucceed({ films: [] }))).toEqual({
      ...initialState,
      loading: false,
      films: [],
      count: initialState.count + initialState.limit,
    });
  });
  it("should handle fetchFilmsAdminPanelNextFailed", () => {
    expect(
      filmsAdminPanel(initialState, fetchFilmsAdminPanelNextFailed({ message: "Error" }))
    ).toEqual({
      ...initialState,
      loading: false,
      error: "Error",
    });
  });
});
