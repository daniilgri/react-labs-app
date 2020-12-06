import addFilm, { initialState } from "../addFilm";
import {
  addFilmFailed,
  addFilmRequested,
  addFilmSucceed,
} from "../../actions/filmsAdminPanelActions";

describe("addFilm reducer", () => {
  it("should return initial state", () => {
    expect(addFilm(undefined, {})).toEqual(initialState);
  });
  it("should handle addFilmRequested", () => {
    expect(addFilm(initialState, addFilmRequested())).toEqual({ loading: true, error: "" });
  });
  it("should handle addFilmSucceed", () => {
    expect(addFilm(initialState, addFilmSucceed())).toEqual({ loading: false, error: "" });
  });
  it("should handle addFilmFailed", () => {
    expect(addFilm(initialState, addFilmFailed({ message: "Error" }))).toEqual({
      loading: false,
      error: "Error",
    });
  });
});
