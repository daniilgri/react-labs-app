import getOrdersByFilm from "../filmSubscribersSelectors/getOrdersByFilm";
import getOrdersByFilmQuery from "../filmSubscribersSelectors/getOrdersByFilmQuery";
import getOrdersByFilmLimit from "../filmSubscribersSelectors/getOrdersByFilmLimit";

describe("filmSubscribers selectors", () => {
  it("gives back the limit of subscribers", () => {
    const limit = 4;
    const state = { filmSubscribers: { limit } };
    expect(getOrdersByFilmLimit(state)).toBe(limit);
  });

  it("gives back the orders", () => {
    const orders = [];
    const state = { filmSubscribers: { orders } };
    expect(getOrdersByFilm(state)).toBe(orders);
  });

  it("gives back the query of subscribers", () => {
    const query = "Query";
    const state = { filmSubscribers: { query } };
    expect(getOrdersByFilmQuery(state)).toBe(query);
  });
});
