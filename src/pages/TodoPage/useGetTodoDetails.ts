import { useState, useEffect } from "react";
import { onSnapshot, DocumentData, doc,  } from "firebase/firestore";
import db from "../../backend/firebase";

const useGetTodoDetails = (id: string) => {
  const [todo, setTodo] = useState<DocumentData>();

  useEffect(() => {
    const unsub = onSnapshot(doc(db, "todos", id), (doc) => {
      setTodo({
        task: doc.data()!.task,
        name: doc.data()!.name,
        description: doc.data()!.description,
        deadline: doc.data()!.deadline.toDate().toDateString(),
        createdAt: doc.data()!.createdAt.toDate().toDateString(),
        completed: doc.data()!.completed,
        urgent: doc.data()!.urgent,
      });
    });
    return () => {
      unsub();
    };
  }, [id]);

  return todo;
};

export default useGetTodoDetails;
