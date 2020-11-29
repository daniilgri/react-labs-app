import { db, auth } from "./firestore";

export const makeOrderAPI = async (payload) => {
  const newOrderDoc = db.collection("orders").doc();
  const slug = `${payload.filmId} - ${payload.userUid} - ${payload.screeningDate.date} - ${payload.screeningDate.time}`;
  await newOrderDoc.set({ ...payload, slug });
};

export const getOrdersInitialAPI = async (payload) => {
  const allSnapshot = await db
    .collection("orders")
    .where("userUid", "==", auth.currentUser.uid)
    .get();

  const snapshot = await db
    .collection("orders")
    .orderBy("slug")
    .limit(payload.limit)
    .where("userUid", "==", auth.currentUser.uid)
    .get();

  return {
    orders: await Promise.all(
      snapshot.docs.map(async (doc) => {
        const film = await db.collection("films").doc(doc.data().filmId).get();
        return { id: doc.id, film: film.data(), ...doc.data() };
      })
    ),
    allCount: allSnapshot.size,
  };
};

export const getOrdersNextAPI = async (payload) => {
  const snapshot = await db
    .collection("orders")
    .orderBy("slug")
    .where("userUid", "==", auth.currentUser.uid)
    .startAfter(payload.orders[payload.orders.length - 1].slug)
    .limit(payload.limit)
    .get();

  return {
    orders: await Promise.all(
      snapshot.docs.map(async (doc) => {
        const film = await db.collection("films").doc(doc.data().filmId).get();
        return { id: doc.id, film: film.data(), ...doc.data() };
      })
    ),
  };
};

export const cancelOrderAPI = async (payload) => {
  await db.collection("orders").doc(payload.orderId).delete();
};
