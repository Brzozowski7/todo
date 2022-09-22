import { useState, useEffect } from "react";
import {
  collection,
  query,
  where,
  DocumentData,
  onSnapshot,
} from "firebase/firestore";
import db from "../../backend/firebase";

const useGetUserTodos = (name: string) => {
  const [userTodos, setUserTodos] = useState<DocumentData[]>([]);

  const q = query(collection(db, "todos"), where("name", "==", name));

  useEffect(() => {
    const unsub = onSnapshot(q, (querySnapshot) => {
      setUserTodos(
        querySnapshot.docs.map((doc) => ({
          task: doc.data().task,
          name: doc.data().name,
          completed: doc.data().completed,
          urgent: doc.data().urgent,
          id: doc.id,
        }))
      );
    });
    return () => {
      unsub();
    };
  }, [name]);

  return userTodos;
};

export default useGetUserTodos;
