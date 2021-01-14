import { v4 as uuidv4 } from "uuid";
import { db, storage } from "./firestore";

import createKeywords from "../utils/createKeywords";

const generateKeywords = tags => {
  const result = [];
  tags.forEach(el => {
    result.push(...createKeywords(el.toLowerCase()));
  });

  return ["", ...result];
};

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
    keywords: generateKeywords(payload.tags),
  });

  const imageName = uuidv4();
  const uploadTask = storage.ref(`/images/${imageName}`).put(payload.imageAsFile);

  uploadTask.on(
    "state_changed",
    () => {},
    () => {},
    () => {
      storage
        .ref("images")
        .child(imageName)
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

  if (changedValues.tags) {
    filmDoc.ref.update({
      keywords: generateKeywords(changedValues.tags),
    });
  }
};

export const getFilmsInitialAPI = async payload => {
  const allSnapshot = await db.collection("films").get();
  let snapshot;
  if (payload.query) {
    snapshot = await db
      .collection("films")
      .where("keywords", "array-contains", payload.query.toLowerCase())
      .orderBy("title")
      .limit(payload.limit)
      .get();
  } else {
    snapshot = await db.collection("films").orderBy("title").limit(payload.limit).get();
  }
  return {
    films: snapshot.docs.map(doc => {
      return { id: doc.id, ...doc.data() };
    }),
    allCount: allSnapshot.size,
  };
};

export const getFilmsNextAPI = async payload => {
  let snapshot;
  if (payload.query) {
    snapshot = await db
      .collection("films")
      .where("keywords", "array-contains", payload.query.toLowerCase())
      .orderBy("title")
      .startAfter(payload.films[payload.films.length - 1].title)
      .limit(payload.limit)
      .get();
  } else {
    snapshot = await db
      .collection("films")
      .orderBy("title")
      .startAfter(payload.films[payload.films.length - 1].title)
      .limit(payload.limit)
      .get();
  }
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
