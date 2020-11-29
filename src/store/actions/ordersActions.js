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

export const fetchOrdersInitialRequested = createAction(
  "@ORDERS/FETCH_ORDERS_INITIAL_REQUESTED"
);
export const fetchOrdersInitialSucceed = createAction(
  "@ORDERS/FETCH_ORDERS_INITIAL_SUCCEED",
  (payload) => payload
);
export const fetchOrdersInitialFailed = createAction(
  "@ORDERS/FETCH_ORDERS_INITIAL_FAILED",
  (payload) => payload
);

export const fetchOrdersNextRequested = createAction(
  "@ORDERS/FETCH_ORDERS_NEXT_REQUESTED"
);
export const fetchOrdersNextSucceed = createAction(
  "@ORDERS/FETCH_ORDERS_NEXT_SUCCEED",
  (payload) => payload
);
export const fetchOrdersNextFailed = createAction(
  "@ORDERS/FETCH_ORDERS_NEXT_FAILED",
  (payload) => payload
);

export const cancelOrderRequested = createAction(
  "@ORDERS/CANCEL_ORDER_REQUESTED",
  (payload) => payload
);
export const cancelOrderSucceed = createAction("@ORDERS/CANCEL_ORDER_SUCCEED");
export const cancelOrderFailed = createAction(
  "@ORDERS/CANCEL_ORDER_FAILED",
  (payload) => payload
);
