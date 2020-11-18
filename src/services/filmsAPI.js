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
    (snapShot) => {
      console.log(snapShot);
    },
    (err) => {
      console.log(err);
    },
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
  const snapshot = await db.collection("films").limit(payload.count).get();
  return snapshot.docs.map((doc) => {
    return { id: doc.id, ...doc.data() };
  });
};

export const getFilmsNextAPI = async (payload) => {};

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
  await ordersSnapshot.docs.forEach((doc) => {
    doc.ref.delete();
  });
};

export const updateFilmRatingAPI = async (payload) => {
  const filmSnapshot = await db.collection("films").doc(payload.filmId).get();

  console.log(filmSnapshot.data());
};
