import { useState, useEffect } from "react";
import {
  collection,
  getDocs,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import db from "../../misc/firebase";

export default function useDbData() {
  const [todos, setTodos] = useState<DocumentData[]>();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          task: doc.data().Task,
          user: doc.data().User,
          id: doc.id,
        }))
      );
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return todos;
}
