import addFilm, { initialState } from "../addFilm";
import {
  addFilmFailed,
  addFilmRequested,
  addFilmSucceed,
} from "../../actions/filmsAdminPanelActions";

const getPerfectInitialState = (initial, changed) => ({
  ...initial,
  ...changed,
});

describe("addFilm reducer", () => {
  it("should return initial state", () => {
    expect(addFilm(undefined, {})).toEqual(initialState);
  });
  it("should handle addFilmRequested", () => {
    expect(addFilm(initialState, addFilmRequested())).toEqual(
      getPerfectInitialState(initialState, { loading: true })
    );
  });
  it("should handle addFilmSucceed", () => {
    expect(addFilm(initialState, addFilmSucceed())).toEqual(
      getPerfectInitialState(initialState, { loading: false })
    );
  });
  it("should handle addFilmFailed", () => {
    expect(addFilm(initialState, addFilmFailed({ message: "Error" }))).toEqual(
      getPerfectInitialState(initialState, {
        loading: false,
        error: "Error",
      })
    );
  });
});
