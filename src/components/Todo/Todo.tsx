import { useContext, useState } from "react";
import { DocumentData } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import {
  TodoWrapper,
  TipContainer,
  IconsContainer,
  BasicTaskInfo,
} from "./Todo.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { deleteTodo, markAsComplete, markAsUrgent } from "./Todo.utils";

interface TodoProps {
  todo: DocumentData;
}

export default function Todo({ todo}: TodoProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <TodoWrapper
      isDarkMode={isDarkMode}

      urgent={todo.urgent}
      completed={todo.completed}
    >
      <BasicTaskInfo
        to={"/todo/" + todo.id}
        isDarkMode={isDarkMode}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        <h2>{todo.task}</h2>
        <p> {todo?.name}</p>
        <TipContainer>{isHovering && "Click to see details"}</TipContainer>
      </BasicTaskInfo>
      <IconsContainer>
        <FontAwesomeIcon
          onClick={() => markAsComplete(todo.completed, todo.id)}
          icon={faCheck}
          size="xl"
          title={
            todo.completed
              ? "Click to mark as thing to do"
              : "Click to mark as done"
          }
        />
        <FontAwesomeIcon
          onClick={() => deleteTodo(todo.id)}
          icon={faX}
          size="xl"
          title="Click to remove task"
        />
        <FontAwesomeIcon
          onClick={() => markAsUrgent(todo.urgent, todo.id)}
          icon={faExclamation}
          size="xl"
          title={
            todo.urgent ? "Click to remove priority" : "Click to mark as urgent"
          }
        />
      </IconsContainer>
    </TodoWrapper>
  );
}
