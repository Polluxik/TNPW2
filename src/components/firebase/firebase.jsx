import { getFirestore } from "@firebase/firestore";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAlzg1FBKu0MWmleYdgymJ4QbrmLrCndMs",
  authDomain: "tnpw2jobs.firebaseapp.com",
  databaseURL: "https://tnpw2jobs-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "tnpw2jobs",
  storageBucket: "tnpw2jobs.appspot.com",
  messagingSenderId: "271684581739",
  appId: "1:271684581739:web:bd25cb0baba8d63e72b42e"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;