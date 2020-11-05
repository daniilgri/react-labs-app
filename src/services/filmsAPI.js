import { db, storage } from "./firestore";

export const addFilmAPI = async (payload) => {
  const newFilm = await db.collection("films").doc().set({
    title: payload.title,
    description: payload.description,
    ticketPrice: payload.ticketPrice,
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
        .then((fireBaseUrl) => {
          console.log(fireBaseUrl);
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
  return snapshot.data();
};
