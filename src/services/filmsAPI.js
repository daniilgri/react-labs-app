import { db } from "./firestore";

export const addFilmAPI = async (payload) => {
  await db.collection("films").doc().set({
    title: payload.title,
    description: payload.description,
    ticketPrice: payload.ticketPrice,
  });
};

export const getFilmsInitialAPI = async (payload) => {
  const snapshot = await db.collection("films").limit(payload.count).get();
  return snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

export const getFilmsNextAPI = async (payload) => {};

export const getFilmByIdAPI = async (payload) => {
  const snapshot = await db.collection("films").doc(payload).get();
  return snapshot.data();
};
