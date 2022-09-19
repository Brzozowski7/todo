import { useContext, useState } from "react";
import useDbData from "./useDbData";
import { MainPageWrapper, AddTodoBtn, TodosWrapper } from "./MainPage.styles";
import Todo from "../../components/Todo/Todo";
import AddTodo from "../../components/AddTodo";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { rotateTodo } from "./MainPage.utils";

export default function MainPage() {
  const [addTodoActive, setAddTodoActive] = useState(false);
  const todos = useDbData();
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <MainPageWrapper isDarkMode={isDarkMode}>
      <AddTodoBtn
        onClick={() => setAddTodoActive(true)}
        isDarkMode={isDarkMode}
      >
        +
      </AddTodoBtn>
      <TodosWrapper>
        {todos?.map((todo) => {
          return <Todo key={todo.id} todo={todo} rotation={rotateTodo()} />;
        })}
      </TodosWrapper>
      <AddTodo active={addTodoActive} setActive={setAddTodoActive} />
    </MainPageWrapper>
  );
}
