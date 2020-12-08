import getOrders from "../ordersSelectors/getOrders";
import getOrdersLimit from "../ordersSelectors/getOrdersLimit";
import getOrdersQuery from "../ordersSelectors/getOrdersQuery";

describe("orders selectors", () => {
  it("gives back the limit of orders", () => {
    const limit = 4;
    const state = { orders: { limit } };
    expect(getOrdersLimit(state)).toBe(limit);
  });

  it("gives back the orders", () => {
    const orders = [];
    const state = { orders: { orders } };
    expect(getOrders(state)).toBe(orders);
  });

  it("gives back the query of orders", () => {
    const query = "Query";
    const state = { orders: { query } };
    expect(getOrdersQuery(state)).toBe(query);
  });
});
