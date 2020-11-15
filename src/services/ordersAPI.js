import { db } from "./firestore";

export const makeOrderAPI = async (payload) => {
  const newOrderDoc = db.collection("orders").doc();
  await newOrderDoc.set(payload);
};
