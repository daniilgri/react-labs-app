import { db } from "./firestore";
import API from "./axios";

export const getUsersInitialAPI = async payload => {
  const allSnapshot = await db.collection("users").get();
  const snapshot = await db.collection("users").orderBy("email").limit(payload.limit).get();
  return {
    users: snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    }),
    allCount: allSnapshot.size,
  };
};

export const getUsersNextAPI = async payload => {
  const snapshot = await db
    .collection("users")
    .orderBy("email")
    .startAfter(payload.users[payload.users.length - 1].email)
    .limit(payload.limit)
    .get();
  return {
    users: snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    }),
  };
};

export const deleteUserAPI = async payload => {
  await API.post("auth/delete_user", payload);
};

export const fetchFilmSubscribersInitialAPI = async payload => {
  const ordersByFilmAll = await db.collection("orders").where("filmId", "==", payload.filmId).get();
  const ordersByFilm = await db
    .collection("orders")
    .orderBy("slug")
    .limit(payload.limit)
    .where("filmId", "==", payload.filmId)
    .get();
  const users = [
    ...new Set(
      ordersByFilm.docs.map(doc => {
        return doc.data().userUid;
      })
    ),
  ];
  const usersData = [];
  users.forEach(userUid => {
    const usersSnapshot = db.collection("users").where("uid", "==", userUid).get();
    usersData.push(usersSnapshot.docs[0].data());
  });
  return {
    users: usersData,
    allCount: ordersByFilmAll.size,
    orders: ordersByFilm.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    }),
  };
};

export const fetchFilmSubscribersNextAPI = async payload => {
  const ordersByFilm = await db
    .collection("orders")
    .orderBy("slug")
    .where("filmId", "==", payload.filmId)
    .startAfter(payload.orders[payload.orders.length - 1].slug)
    .limit(payload.limit)
    .get();
  const users = [
    ...new Set(
      ordersByFilm.docs.map(doc => {
        return doc.data().userUid;
      })
    ),
  ];
  const usersData = [];
  users.forEach(userUid => {
    const usersSnapshot = db.collection("users").where("uid", "==", userUid).get();
    usersData.push(usersSnapshot.docs[0].data());
  });
  return { users: usersData };
};
