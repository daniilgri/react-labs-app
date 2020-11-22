import { db, auth } from "./firestore";

export const makeOrderAPI = async (payload) => {
  const newOrderDoc = db.collection("orders").doc();
  await newOrderDoc.set(payload);
};

export const getOrdersInitialAPI = async (payload) => {
  const snapshot = await db
    .collection("orders")
    .limit(payload.count)
    .where("userUid", "==", auth.currentUser.uid)
    .get();

  return Promise.all(
    snapshot.docs.map(async (doc) => {
      const film = await db.collection("films").doc(doc.data().filmId).get();
      return { id: doc.id, film: film.data(), ...doc.data() };
    })
  );
};

export const cancelOrderAPI = async (payload) => {
  await db.collection("orders").doc(payload.orderId).delete();
};
