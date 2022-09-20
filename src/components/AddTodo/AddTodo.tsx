import {
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";
import { motion } from "framer-motion";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  IconContainer,
  StyledBtn,
  StyledLabelAndInput,
  ErrorMessageContainer,
} from "./AddTodo.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext";
import { variants, today } from "./AddTodo.const";
import { todoInputs } from "../../misc/todoInputs";
import useAddTodoToDb from "./useAddTodoToDb";

interface ITodoDetails {
  task: string;
  description: string;
  name: string;
  deadline: string;
}
interface AddTodoProps {
  active: boolean;
  setActive: Dispatch<SetStateAction<boolean>>;
}

export default function AddTodo({ active, setActive }: AddTodoProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [todoDetails, setTodoDetails] = useState({
    task: "",
    description: "",
    name: "",
    deadline: "",
  });
  const { submitTodo, loading, status } = useAddTodoToDb(todoDetails);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoDetails((prev) => {
      return {
        ...prev,
        [e.target.id]: e.target.value,
      };
    });
  };
  useEffect(() => {
    if (typeof status == "string")
      setTodoDetails({
        task: "",
        description: "",
        name: "",
        deadline: "",
      });
  }, [status]);

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
      {todoInputs.map((item) => {
        return (
          <StyledLabelAndInput
            isDarkMode={isDarkMode}
            err={status?.includes(item.id)}
            key={item.id}
          >
            <label htmlFor={item.id}>{item.text}</label>
            <input
              value={todoDetails[item.id as keyof ITodoDetails]}
              type={item.type}
              id={item.id}
              min={today}
              onChange={(e) => handleChange(e)}
            />
          </StyledLabelAndInput>
        );
      })}
      <label htmlFor="description">Description (optional)</label>
      <textarea
        value={todoDetails.description}
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
      <StyledBtn onClick={submitTodo} isDarkMode={isDarkMode}>
        {loading ? "Adding Todo..." : "Add Todo"}
      </StyledBtn>
      <ErrorMessageContainer
        err={typeof status === "object"}
        isDarkMode={isDarkMode}
      >
        {typeof status === "object"
          ? `Please fill up the rest of required fields: ${status.join(", ")}`
          : status}
      </ErrorMessageContainer>
    </Wrapper>
  );
}
