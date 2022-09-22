import { useContext } from "react";
import { useParams } from "react-router-dom";
import useGetUserTodos from "./useGetUserTodos";
import { UsersTodosPageWrapper, TodosWrapper } from "./UserTodos.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import Todo from "../../components/Todo";

interface UserTodoProps {
  search: string;
}

export default function UserTodos({ search }: UserTodoProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  const { user } = useParams();
  const userTodos = useGetUserTodos(user!);
  return (
    <UsersTodosPageWrapper isDarkMode={isDarkMode}>
      <h1>All Todos of {user}</h1>
      <TodosWrapper>
        {userTodos
          .filter((todo) => {
            return (
              todo.task.toLowerCase().startsWith(search.toLowerCase())
            );
          })
          .map((item) => {
            return <Todo key={item.id} todo={item} />;
          })}
      </TodosWrapper>
    </UsersTodosPageWrapper>
  );
}
