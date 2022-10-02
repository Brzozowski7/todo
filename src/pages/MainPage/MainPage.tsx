import { useContext, useState } from "react";
import { FormattedMessage } from "react-intl";
import useDbData from "./useDbData";
import { MainPageWrapper, AddTodoBtn, TodosWrapper } from "./MainPage.styles";
import { filterByNameAndTask } from "./MainPage.utils";
import Todo from "../../components/Todo/Todo";
import AddTodo from "./components/AddTodo";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";

interface MainPageProps {
  search: string;
}
export default function MainPage({ search }: MainPageProps) {
  const [addTodoActive, setAddTodoActive] = useState(false);
  const todos = useDbData();
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <MainPageWrapper isDarkMode={isDarkMode} >
      <AddTodoBtn
        onClick={() => setAddTodoActive(true)}
        isDarkMode={isDarkMode}
        data-testid="mainPage-addTodoBtn"
      >
        +
      </AddTodoBtn>
      <TodosWrapper data-testid="main-page-todos-wrapper">
        {todos
          ?.filter((todo) => filterByNameAndTask(todo.name, todo.task, search))
          .map((todo) => {
            return <Todo key={todo.id} todo={todo} />;
          })}
        {todos?.length === 0 && (
          <FormattedMessage
            id="MainPageNothingToDisplay"
            defaultMessage="There is no Todos to display"
          />
        )}
      </TodosWrapper>
      <AddTodo active={addTodoActive} setActive={setAddTodoActive} />
    </MainPageWrapper>
  );
}
