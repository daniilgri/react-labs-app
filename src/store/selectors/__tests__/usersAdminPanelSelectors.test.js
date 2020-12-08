import getUsers from "../usersAdminPanelSelectors/getUsers";
import getUsersLimit from "../usersAdminPanelSelectors/getUsersLimit";
import getUsersQuery from "../usersAdminPanelSelectors/getUsersQuery";

describe("usersAdminPanel selectors", () => {
  it("gives back the limit of users", () => {
    const limit = 4;
    const state = { usersAdminPanel: { limit } };
    expect(getUsersLimit(state)).toBe(limit);
  });

  it("gives back the users", () => {
    const users = [];
    const state = { usersAdminPanel: { users } };
    expect(getUsers(state)).toBe(users);
  });

  it("gives back the query of users", () => {
    const query = "Query";
    const state = { usersAdminPanel: { query } };
    expect(getUsersQuery(state)).toBe(query);
  });
});
