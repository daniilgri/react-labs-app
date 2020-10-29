import { db } from "./firestore";

export const addFilmAPI = async (payload) => {
  console.log(payload);
  await db.collection("films").doc().set({
    title: payload.title,
    description: payload.description,
    ticketPrice: payload.ticketPrice,
  });
};

export const getFilmsInitialAPI = async (payload) => {
  const snapshot = await db.collection("films").limit(payload.count).get();
  return snapshot.docs.map((doc) => doc.data());
};

export const getFilmsNextAPI = async (payload) => {};
