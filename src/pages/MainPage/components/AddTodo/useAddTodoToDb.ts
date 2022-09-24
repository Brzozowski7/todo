import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import db from "../../../../backend/firebase";
import { checkTodo } from "./AddTodo.utils";

interface IStatus {
  added: boolean;
  errors: string[];
}

const useAddTodoToDb = (todoDetails: ITodoDetails) => {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<IStatus>({ added: false, errors: [] });

  const submitTodo = async () => {
    setStatus({ added: false, errors: [] });
    if (checkTodo(todoDetails).length > 0) {
      setStatus({ added: false, errors: checkTodo(todoDetails) });
    } else {
      setLoading(true);
      try {
        await addDoc(collection(db, "/todos"), {
          task: todoDetails.task,
          description: todoDetails.description || "",
          name: todoDetails.name,
          deadline: new Date(todoDetails.deadline),
          createdAt: new Date(),
          completed: false,
          urgent: false,
        });
        setStatus({ added: true, errors: [] });
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
