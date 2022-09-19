import { useContext, Dispatch, SetStateAction } from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Wrapper } from "./AddTodo.styles";
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
      <FontAwesomeIcon onClick={() => setActive(false)} icon={faX} size="xl" />
    </Wrapper>
  );
}
