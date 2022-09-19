import { useContext, useState } from "react";
import { DocumentData } from "firebase/firestore/lite";
import { TodoWrapper, TipContainer } from "./Todo.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";

interface TodoProps {
  todo: DocumentData;
  rotation: number;
}

export default function Todo({ todo, rotation }: TodoProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [isHovering, setIsHovering] = useState(false);
  return (
    <TodoWrapper
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
      isDarkMode={isDarkMode}
      rotation={rotation}
    >
      <h2>{todo.task}</h2>
      <p>- {todo.user}</p>
      <TipContainer>{isHovering && "Click to see details"}</TipContainer>
    </TodoWrapper>
  );
}
