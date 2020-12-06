import newOrder, { initialState } from "../newOrder";
import { makeOrderFailed, makeOrderSucceed, makeOrderRequested } from "../../actions/ordersActions";

describe("newOrder reducer", () => {
  it("should return initial state", () => {
    expect(newOrder(undefined, {})).toEqual(initialState);
  });

  it("should handle makeOrderRequested", () => {
    expect(newOrder(initialState, makeOrderRequested())).toEqual({
      ...initialState,
      loading: true,
    });
  });
  it("should handle makeOrderSucceed", () => {
    expect(newOrder(initialState, makeOrderSucceed())).toEqual({
      ...initialState,
      loading: false,
    });
  });
  it("should handle makeOrderFailed", () => {
    expect(newOrder(initialState, makeOrderFailed({ message: "Error" }))).toEqual({
      ...initialState,
      error: "Error",
    });
  });
});
