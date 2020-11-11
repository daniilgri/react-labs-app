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
    rate: 0,
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
          console.log(newFilmDoc.id);
          console.log(imageUrl);
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
  return snapshot.data();
};
