import { useContext } from "react";
import { DocumentData } from "firebase/firestore/lite";
import { TodoWrapper } from "./Todo.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export default function Todo({ todo }: DocumentData) {
  const { isDarkMode } = useContext(DarkModeContext);
  return <TodoWrapper isDarkMode={isDarkMode}><h2>{todo.task}</h2>Added By: {todo.user}</TodoWrapper>;
}
