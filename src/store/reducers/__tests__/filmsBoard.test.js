import filmsBoard, { initialState } from "../filmsBoard";

import {
  fetchFilmsInitialRequested,
  fetchFilmsInitialFailed,
  fetchFilmsInitialSucceed,
  fetchFilmsNextRequested,
  fetchFilmsNextFailed,
  fetchFilmsNextSucceed,
  setFilmsSearchQuery,
} from "../../actions/filmsActions";

const getPerfectInitialState = (initial, changed) => ({
  ...initial,
  ...changed,
});

describe("filmsBoard reducer", () => {
  it("should return initial state", () => {
    expect(filmsBoard(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchFilmsInitialRequested", () => {
    expect(filmsBoard(initialState, fetchFilmsInitialRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle fetchFilmsInitialSucceed", () => {
    expect(filmsBoard(initialState, fetchFilmsInitialSucceed({ films: [], allCount: 16 }))).toEqual(
      getPerfectInitialState(initialState, {
        allCount: 16,
        films: [],
      })
    );
  });
  it("should handle fetchFilmsInitialFailed", () => {
    expect(filmsBoard(initialState, fetchFilmsInitialFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        error: "Error",
      })
    );
  });

  it("should handle fetchFilmsNextRequested", () => {
    expect(filmsBoard(initialState, fetchFilmsNextRequested())).toEqual(
      getPerfectInitialState(initialState, {
        loading: true,
      })
    );
  });
  it("should handle fetchFilmsNextSucceed", () => {
    expect(filmsBoard(initialState, fetchFilmsNextSucceed({ films: [] }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        films: [],
        count: initialState.count + initialState.limit,
      })
    );
  });
  it("should handle fetchFilmsNextFailed", () => {
    expect(filmsBoard(initialState, fetchFilmsNextFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
      })
    );
  });

  it("should handle setFilmsSearchQuery", () => {
    expect(filmsBoard(initialState, setFilmsSearchQuery("search query"))).toEqual(
      getPerfectInitialState(initialState, {
        query: "search query",
      })
    );
  });
});
