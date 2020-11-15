import { createAction } from "redux-actions";

export const makeOrderRequested = createAction(
  "@ORDERS/MAKE_ORDER_REQUESTED",
  (payload) => payload
);
export const makeOrderSucceed = createAction(
  "ORDERS/MAKE_ORDER_SUCCEED",
  (payload) => payload
);
export const makeOrderFailed = createAction(
  "ORDERS/MAKE_ORDER_FAILED",
  (payload) => payload
);
