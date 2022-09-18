import { DocumentData } from "firebase/firestore/lite";
import { TodoWrapper } from "./Todo.styles";

export default function Todo({ todo }: DocumentData) {
  return <TodoWrapper>{todo.task}</TodoWrapper>;
}
