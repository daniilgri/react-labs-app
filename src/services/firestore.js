import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBrz7Uc3MPI0BsB7r9mu6Y5YVV4XNgHqtE",
  authDomain: "cinema-app-143fc.firebaseapp.com",
  databaseURL: "https://cinema-app-143fc.firebaseio.com",
  projectId: "cinema-app-143fc",
  storageBucket: "cinema-app-143fc.appspot.com",
  messagingSenderId: "963418261157",
  appId: "1:963418261157:web:30ddae748c7de05fc1af4c",
};

const app = firebase.initializeApp(firebaseConfig);

export const db = app.firestore();

export const auth = app.auth();

export const storage = app.storage();
