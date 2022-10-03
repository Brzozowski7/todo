import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage } from "react-intl";
import useGetUserTodos from "./useGetUserTodos";
import { UsersTodosPageWrapper, TodosWrapper } from "./UserTodos.styles";
import { filterByTask } from "./UserTodos.utils";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";
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
      <h1 data-testid="user-todos-heading">
        <FormattedMessage id="UsersTodoAllOf" defaultMessage="All Todos of" />{" "}
        {user}
      </h1>
      <TodosWrapper data-testid="user-todos-wrapper">
        {userTodos
          .filter((todo) => filterByTask(todo.task, search))
          .map((item) => {
            return <Todo key={item.id} todo={item} />;
          })}
      </TodosWrapper>
    </UsersTodosPageWrapper>
  );
}
