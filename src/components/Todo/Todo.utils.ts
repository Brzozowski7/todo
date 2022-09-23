import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import db from "../../backend/firebase";

export const deleteTodo = async (id: string) => {
  await deleteDoc(doc(db, "/todos", id));
};
export const toggleIsComplete = async (isComplete: boolean, id: string) => {
  await updateDoc(doc(db, "/todos", id), {
    completed: !isComplete,
  });
};
export const toggleIsUrgent = async (isUrgent: boolean, id: string) => {
  await updateDoc(doc(db, "/todos", id), {
    urgent: !isUrgent,
  });
};
