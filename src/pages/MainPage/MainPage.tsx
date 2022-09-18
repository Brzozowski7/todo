import { useState, useEffect } from "react";
import { collection, getDocs, DocumentData } from "firebase/firestore/lite";
import db from "../../misc/firebase";

export default function MainPage() {
  const [todos, setTodos] = useState<DocumentData[]>();

  const getTodos = async () => {
    const todosCollection = collection(db, "todos");
    const todosSnapshot = await getDocs(todosCollection);
    setTodos(todosSnapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  useEffect(() => {
    getTodos();
  }, []);
  return (
    <div>
      {todos?.map((todo) => {
        return <div key={todo.id}>{todo.User}</div>;
      })}
    </div>
  );
}
