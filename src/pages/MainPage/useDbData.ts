import { useState, useEffect } from "react";
import { collection, DocumentData, onSnapshot } from "firebase/firestore";
import db from "../../backend/firebase";

export default function useDbData() {
  const [todos, setTodos] = useState<DocumentData[]>();

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "todos"), (snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({
          task: doc.data().task,
          name: doc.data().name,
          completed: doc.data().completed,
          urgent: doc.data().urgent,
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
