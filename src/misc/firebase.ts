import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseApp = initializeApp({
  apiKey: "AIzaSyAwK8L-Z36JJoY0kGVP5K8eepI0SMG9wno",
  authDomain: "todos-d2fcf.firebaseapp.com",
  projectId: "todos-d2fcf",
  storageBucket: "todos-d2fcf.appspot.com",
  messagingSenderId: "319405141795",
  appId: "1:319405141795:web:bfe2b8fe5c110d4346a696",
});
const db = getFirestore(firebaseApp)
export default db;
