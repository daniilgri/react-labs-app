import generateKeywords from "../utils/generateKeywords";
import { db, storage } from "./firestore";

export const addFilmAPI = async payload => {
  const newFilmDoc = db.collection("films").doc();
  await newFilmDoc.set({
    title: payload.title,
    description: payload.description,
    ticketPrice: payload.ticketPrice,
    image: "",
    tags: payload.tags,
    screeningDates: payload.screeningDates,
    rates: [],
    keywords: generateKeywords({ title: payload.title.toLowerCase() }),
  });

  const uploadTask = storage.ref(`/images/${payload.imageAsFile.name}`).put(payload.imageAsFile);

  uploadTask.on(
    "state_changed",
    () => {},
    () => {},
    () => {
      storage
        .ref("images")
        .child(payload.imageAsFile.name)
        .getDownloadURL()
        .then(imageUrl => {
          newFilmDoc.update({
            image: imageUrl,
          });
        });
    }
  );
};

export const editFilmAPI = async payload => {
  const { values, changedValues } = payload;
  const filmDoc = await db.collection("films").doc(payload.filmId).get();

  if ("imageAsFile" in changedValues) {
    const uploadTask = storage
      .ref(`/images/${changedValues.imageAsFile.name}`)
      .put(changedValues.imageAsFile);

    uploadTask.on(
      "state_changed",
      () => {},
      () => {},
      () => {
        storage
          .ref("images")
          .child(changedValues.imageAsFile.name)
          .getDownloadURL()
          .then(imageUrl => {
            delete values.imageAsFile;
            delete changedValues.imageAsFile;
            filmDoc.ref.update({
              image: imageUrl,
            });
          });
      }
    );
  }
  filmDoc.ref.update(changedValues);

  if (changedValues.title) {
    filmDoc.ref.update({
      keywords: generateKeywords({ title: changedValues.title.toLowerCase() }),
    });
  }
};

export const getFilmsInitialAPI = async payload => {
  const allSnapshot = await db.collection("films").get();
  const snapshot = await db
    .collection("films")
    .where("keywords", "array-contains", payload.query)
    .orderBy("title")
    .limit(payload.limit)
    .get();
  return {
    films: snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    }),
    allCount: allSnapshot.size,
  };
};

export const getFilmsNextAPI = async payload => {
  const snapshot = await db
    .collection("films")
    .orderBy("title")
    .startAfter(payload.films[payload.films.length - 1].title)
    .limit(payload.limit)
    .get();
  return {
    films: snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    }),
  };
};

export const getFilmByIdAPI = async payload => {
  const snapshot = await db.collection("films").doc(payload).get();
  return { id: snapshot.id, ...snapshot.data() };
};

export const deleteFilmAPI = async payload => {
  await db.collection("films").doc(payload.filmId).delete();
  const ordersSnapshot = await db.collection("orders").where("filmId", "==", payload.filmId).get();
  ordersSnapshot.docs.forEach(doc => {
    doc.ref.delete();
  });
};

export const updateFilmRatingAPI = async payload => {
  const filmDoc = await db.collection("films").doc(payload.filmId).get();

  filmDoc.ref.update({
    rates: [
      ...filmDoc.data().rates.filter(rate => rate.userUid !== payload.userUid),
      { userUid: payload.userUid, rate: payload.rate },
    ],
  });
};
