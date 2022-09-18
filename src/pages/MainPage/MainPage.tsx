import { useContext } from "react";
import useDbData from "./useDbData";
import { MainPageWrapper } from "./MainPage.styles";
import Todo from "../../components/Todo/Todo";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export default function MainPage() {
  const todos = useDbData();
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <MainPageWrapper isDarkMode={isDarkMode}>
      {todos?.map((todo) => {
        return <Todo key={todo.id} todo={todo} />;
      })}
    </MainPageWrapper>
  );
}
