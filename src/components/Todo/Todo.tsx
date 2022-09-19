import { useContext, useState } from "react";
import { DocumentData } from "firebase/firestore/lite";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation } from "@fortawesome/free-solid-svg-icons";
import { TodoWrapper, TipContainer, IconsContainer } from "./Todo.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";

interface TodoProps {
  todo: DocumentData;
  rotation: number;
}

export default function Todo({ todo, rotation }: TodoProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [isHovering, setIsHovering] = useState(false);
  const [urgent, setUrgent] = useState(false);
  return (
    <TodoWrapper
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      isDarkMode={isDarkMode}
      rotation={rotation}
      urgent={urgent}
    >
      <h2>{todo.task}</h2>
      <p>- {todo.user}</p>
      <TipContainer>{isHovering && "Click to see details"}</TipContainer>
      <IconsContainer>
        <FontAwesomeIcon
          icon={faCheck}
          size="xl"
          title="Click to mark as done"
        />
        <FontAwesomeIcon
          icon={faExclamation}
          size="xl"
          title={
            urgent ? "Click to remove priority" : "Click to mark as urgent"
          }
          onClick={() => setUrgent((prev) => !prev)}
        />
      </IconsContainer>
    </TodoWrapper>
  );
}
