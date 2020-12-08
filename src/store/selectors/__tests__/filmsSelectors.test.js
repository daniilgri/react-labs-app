import getFilms from "../filmsSelectors/getFilms";
import getFilmsLimit from "../filmsSelectors/getFilmsLimit";
import getFilmsQuery from "../filmsSelectors/getFilmsQuery";

describe("films saga selectors", () => {
  it("gives back the limit of films", () => {
    const limit = 4;
    const state = { filmsBoard: { limit } };
    expect(getFilmsLimit(state)).toBe(limit);
  });

  it("gives back the films", () => {
    const films = [];
    const state = { filmsBoard: { films } };
    expect(getFilms(state)).toBe(films);
  });

  it("gives back the query of films", () => {
    const query = "Query";
    const state = { filmsBoard: { query } };
    expect(getFilmsQuery(state)).toBe(query);
  });
});
