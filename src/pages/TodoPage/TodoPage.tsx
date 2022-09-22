import { useContext } from "react";
import { useParams } from "react-router-dom";
import {
  TodoPageWrapper,
  TodoDetailsWrapper,
  StyledLink,
} from "./TodoPage.styles";
import useGetTodoDetails from "./useGetTodoDetails";
import { calculateTimeLeft } from "./TodoPage.utils";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export default function TodoPage() {
  const { isDarkMode } = useContext(DarkModeContext);
  const { todoID } = useParams();
  const todo = useGetTodoDetails(todoID!);

  return (
    <TodoPageWrapper>
      {todo && (
        <TodoDetailsWrapper
          completed={todo.completed}
          urgent={todo.urgent}
          isDarkMode={isDarkMode}
        >
          <h1>{todo.task}</h1>
          <p>{todo.description}</p>
          <p>Added by: {todo.name}</p>
          <StyledLink to={"/user/" + todo?.name} isDarkMode={isDarkMode}>
            Click to go to all {todo.name}'s tasks
          </StyledLink>
          <p>Created: {todo.createdAt}</p>
          <p>Deadline: {todo.deadline}</p>
          <p>Time left: {calculateTimeLeft(todo?.deadline)}</p>
          <p>Urgent: {todo.urgent ? "Yes" : "No"}</p>
          <p>Completed: {todo.completed ? "Yes" : "No"}</p>
        </TodoDetailsWrapper>
      )}
    </TodoPageWrapper>
  );
}
