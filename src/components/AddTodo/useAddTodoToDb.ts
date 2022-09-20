import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../backend/firebase";
import { checkTodo } from "./AddTodo.utils";

interface ITodoDetails {
  task: string;
  description: string;
  name: string;
  deadline: string;
}

const useAddTodoToDb = (todoDetails: ITodoDetails) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string[] | string>();

  const submitTodo = async () => {
    if (checkTodo(todoDetails).length > 0) {
      setStatus(checkTodo(todoDetails));
    } else {
      setLoading(true);
      try {
        await addDoc(collection(db, "/todos"), {
          task: todoDetails.task,
          description: todoDetails.description || "",
          name: todoDetails.name,
          deadline: todoDetails.deadline,
          createdAt: Date.now(),
        });
        setStatus("Succesfully added Todo")
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    }
  };
  return { submitTodo, loading, status };
};

export default useAddTodoToDb;
