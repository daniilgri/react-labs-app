import { db } from "./firestore";

export const getUsersInitialAPI = async (payload) => {
  const snapshot = await db.collection("users").limit(payload.count).get();
  return snapshot.docs.map((doc) => {
    return { id: doc.id, uid: doc.uid, ...doc.data() };
  });
};

export const deleteUserAPI = async (payload) => {
  const userSnapshot = await db
    .collection("users")
    .where("uid", "==", payload.userUid)
    .get();

  console.log(userSnapshot.doc[0].data());
};

export const fetchFilmSubscribersAPI = async (payload) => {
  const ordersByFilm = await db
    .collection("orders")
    .limit(payload.count)
    .where("filmId", "==", payload.filmId)
    .get();
  const users = [
    ...new Set(
      ordersByFilm.docs.map((doc) => {
        return doc.data().userUid;
      })
    ),
  ];
  let usersData = [];
  for (const userUid of users) {
    const usersSnapshot = await db
      .collection("users")
      .where("uid", "==", userUid)
      .get();
    usersData.push(usersSnapshot.docs[0].data());
  }
  return usersData;
};
