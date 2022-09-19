import { updateDoc, deleteDoc, doc } from "firebase/firestore";
import db from "../../misc/firebase";

export const deleteTodo = async (id: string) => {
  await deleteDoc(doc(db, "/todos", id));
};
export const markAsComplete = async (status: boolean, id: string) => {
  await updateDoc(doc(db, "/todos", id), {
    completed: !status,
  });
};
export const markAsUrgent = async (status: boolean, id: string) => {
  await updateDoc(doc(db, "/todos", id), {
    urgent: !status,
  });
};
