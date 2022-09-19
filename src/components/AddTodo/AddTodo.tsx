import { useState, useContext, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { collection, addDoc } from "firebase/firestore";
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
import db from "../../backend/firebase"

interface AddTodoProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}
interface ITodoDetails {
  task: string;
  description: string;
  name: string;
  deadline: string;
  urgent: string;
}

export default function AddTodo({ active, setActive }: AddTodoProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [checked, setChecked] = useState(false);
  const [todoDetails, setTodoDetails] = useState({} as ITodoDetails);

  const handleSubmit = async () => {
    await addDoc(collection(db, "/todos"), {
      task: todoDetails.task,
      description: todoDetails.description,
      name: todoDetails.name,
      deadline: todoDetails.deadline,
      urgent: checked,
    });
  };
  
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
      <input
        type="text"
        id="task"
        onChange={(e) =>
          setTodoDetails((prev) => {
            return {
              ...prev,
              task: e.target.value,
            };
          })
        }
      />
      <label htmlFor="description">Description (optional)</label>
      <textarea
        id="description"
        onChange={(e) =>
          setTodoDetails((prev) => {
            return {
              ...prev,
              description: e.target.value,
            };
          })
        }
      />
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        onChange={(e) =>
          setTodoDetails((prev) => {
            return {
              ...prev,
              name: e.target.value,
            };
          })
        }
      />
      <label htmlFor="deadline">Deadline</label>
      <input
        type="date"
        id="deadline"
        onChange={(e) =>
          setTodoDetails((prev) => {
            return {
              ...prev,
              deadline: e.target.value,
            };
          })
        }
      />
      <CheckBoxContainer>
        <input
          type="checkbox"
          id="urgent"
          onChange={() => setChecked((prev) => !prev)}
        />
        <label htmlFor="urgent">Urgent</label>
      </CheckBoxContainer>
      <StyledBtn onClick={handleSubmit} isDarkMode={isDarkMode}>
        Add Todo
      </StyledBtn>
    </Wrapper>
  );
}
