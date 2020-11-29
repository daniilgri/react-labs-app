import { db, storage } from "./firestore";

export const addFilmAPI = async (payload) => {
  const newFilmDoc = db.collection("films").doc();
  await newFilmDoc.set({
    title: payload.title,
    description: payload.description,
    ticketPrice: payload.ticketPrice,
    image: "",
    tags: payload.tags,
    screeningDates: payload.screeningDates,
    rate: null,
  });

  const uploadTask = storage
    .ref(`/images/${payload.imageAsFile.name}`)
    .put(payload.imageAsFile);

  uploadTask.on(
    "state_changed",
    (snapShot) => {},
    (err) => {},
    () => {
      storage
        .ref("images")
        .child(payload.imageAsFile.name)
        .getDownloadURL()
        .then((imageUrl) => {
          newFilmDoc.update({
            image: imageUrl,
          });
        });
    }
  );
};

export const getFilmsInitialAPI = async (payload) => {
  const allSnapshot = await db.collection("films").get();
  const snapshot = await db
    .collection("films")
    .orderBy("title")
    .limit(payload.limit)
    .get();
  return {
    films: snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    }),
    allCount: allSnapshot.size,
  };
};

export const getFilmsNextAPI = async (payload) => {
  console.log(payload);
  const snapshot = await db
    .collection("films")
    .orderBy("title")
    .startAfter(payload.films[payload.films.length - 1].title)
    .limit(payload.limit)
    .get();
  return {
    films: snapshot.docs.map((doc) => {
      return { id: doc.id, ...doc.data() };
    }),
  };
};

export const getFilmByIdAPI = async (payload) => {
  const snapshot = await db.collection("films").doc(payload).get();
  return { id: snapshot.id, ...snapshot.data() };
};

export const deleteFilmAPI = async (payload) => {
  await db.collection("films").doc(payload.filmId).delete();
  const ordersSnapshot = await db
    .collection("orders")
    .where("filmId", "==", payload.filmId)
    .get();
  ordersSnapshot.docs.forEach((doc) => {
    doc.ref.delete();
  });
};

export const updateFilmRatingAPI = async (payload) => {
  const filmSnapshot = await db.collection("films").doc(payload.filmId).get();

  console.log(filmSnapshot.data());
};
