import { db } from "./firestore";

export const getUsersInitialAPI = async (payload) => {
  const snapshot = await db.collection("users").limit(payload.count).get();
  return snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};
