import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../backend/firebase";
import { checkTodo } from "./AddTodo.utils";

interface ITodoDetails {
  task: string;
  description: string;
  name: string;
  deadline: string;
  urgent: string;
}

const useAddTodoToDb = (todoDetails: ITodoDetails) => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<string[]>();

  const submitTodo = async () => {
    if (checkTodo(todoDetails).length > 0) {
      setErrors(checkTodo(todoDetails));
    } else {
      setLoading(true);
      try {
        await addDoc(collection(db, "/todos"), {
          task: todoDetails.task,
          description: todoDetails.description || "",
          name: todoDetails.name,
          deadline: todoDetails.deadline,
          urgent: todoDetails.urgent === "on" ? true : false,
          createdAt: Date.now(),
        });
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };
  return { submitTodo, loading, errors };
};

export default useAddTodoToDb;
