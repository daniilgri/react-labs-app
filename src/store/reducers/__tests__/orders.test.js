import orders, { initialState } from "../orders";
import {
  fetchOrdersInitialFailed,
  fetchOrdersInitialSucceed,
  fetchOrdersInitialRequested,
  fetchOrdersNextRequested,
  fetchOrdersNextFailed,
  fetchOrdersNextSucceed,
} from "../../actions/ordersActions";

describe("orders reducer", () => {
  it("should return initial state", () => {
    expect(orders(undefined, {})).toEqual(initialState);
  });

  it("should handle fetchOrdersInitialRequested", () => {
    expect(orders(initialState, fetchOrdersInitialRequested())).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it("should handle fetchOrdersInitialSucceed", () => {
    expect(orders(initialState, fetchOrdersInitialSucceed({ allCount: 16, orders: [] }))).toEqual({
      ...initialState,
      allCount: 16,
      orders: [],
    });
  });
  it("should handle fetchOrdersInitialFailed", () => {
    expect(orders(initialState, fetchOrdersInitialFailed({ message: "Error" }))).toEqual({
      ...initialState,
      error: "Error",
    });
  });

  it("should handle fetchOrdersNextRequested", () => {
    expect(orders(initialState, fetchOrdersNextRequested())).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it("should handle fetchOrdersNextSucceed", () => {
    expect(orders(initialState, fetchOrdersNextSucceed({ orders: [] }))).toEqual({
      ...initialState,
      loading: false,
      orders: [],
      count: initialState.count + initialState.limit,
    });
  });
  it("should handle fetchOrdersNextFailed", () => {
    expect(orders(initialState, fetchOrdersNextFailed({ message: "Error" }))).toEqual({
      ...initialState,
      loading: false,
      error: "Error",
    });
  });
});
