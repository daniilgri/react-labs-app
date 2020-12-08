import getFilms from "../filmsAdminPanelSelectors/getFilms";
import getFilmsLimit from "../filmsAdminPanelSelectors/getFilmsLimit";
import getFilmsQuery from "../filmsAdminPanelSelectors/getFilmsQuery";

describe("filmsAdminPanel selectors", () => {
  it("gives back the limit of films", () => {
    const limit = 4;
    const state = { filmsAdminPanel: { limit } };
    expect(getFilmsLimit(state)).toBe(limit);
  });

  it("gives back the films", () => {
    const films = [];
    const state = { filmsAdminPanel: { films } };
    expect(getFilms(state)).toBe(films);
  });

  it("gives back the query of films", () => {
    const query = "Query";
    const state = { filmsAdminPanel: { query } };
    expect(getFilmsQuery(state)).toBe(query);
  });
});
