import { useContext, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  IconContainer,
  CheckBoxContainer,
  StyledBtn,
} from "./AddTodo.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { variants } from "./AddTodo.const";

interface AddTodoProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function AddTodo({ active, setActive }: AddTodoProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  return (
    <Wrapper
      isDarkMode={isDarkMode}
      as={motion.div}
      initial={false}
      animate={active ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 1 }}
    >
      <IconContainer>
        <FontAwesomeIcon
          onClick={() => setActive(false)}
          icon={faX}
          size="xl"
        />
      </IconContainer>
      <label htmlFor="task">Task</label>
      <input type="text" id="task" />
      <label htmlFor="description">Description (optional)</label>
      <textarea id="description" />
      <label htmlFor="name">Name</label>
      <input type="text" id="name" />
      <label htmlFor="deadline">Deadline</label>
      <input type="date" id="deadline" />
      <CheckBoxContainer>
        <input type="checkbox" id="urgent" />
        <label htmlFor="urgent">Urgent</label>
      </CheckBoxContainer>
      <StyledBtn isDarkMode={isDarkMode}>Add Todo</StyledBtn>
    </Wrapper>
  );
}
