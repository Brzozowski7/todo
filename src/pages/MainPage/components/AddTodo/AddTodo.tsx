import {
  useState,
  useContext,
  useEffect,
  Dispatch,
  SetStateAction,
  ChangeEvent,
} from "react";
import { motion } from "framer-motion";
import { FormattedMessage } from "react-intl";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import {
  Wrapper,
  IconContainer,
  StyledBtn,
  StyledLabelAndInput,
  ErrorMessageContainer,
} from "./AddTodo.styles";
import { DarkModeContext } from "../../../../contexts/DarkModeContext/DarkModeContext";
import { variants, today } from "./AddTodo.const";
import { todoInputs } from "../../../../misc/todoInputs";
import useAddTodoToDb from "./useAddTodoToDb";

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

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setTodoDetails((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  useEffect(() => {
    if (status.added) {
      setTodoDetails({
        task: "",
        description: "",
        name: "",
        deadline: "",
      });
    }
  }, [status.added]);

  return (
    <Wrapper
      isDarkMode={isDarkMode}
      as={motion.div}
      initial={false}
      animate={active ? "open" : "closed"}
      variants={variants}
      transition={{ duration: 1 }}
      data-testid="AddTodo-form-wrapper"
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
            err={status.errors?.includes(item.name)}
            key={item.id}
          >
            <label htmlFor={item.id}>
              <FormattedMessage id={item.id} defaultMessage={item.text} />
            </label>
            <input
              value={todoDetails[item.name as keyof ITodoDetails]}
              type={item.type}
              name={item.name}
              id={item.id}
              min={today}
              data-testid={item.testID}
              onChange={handleChange}
            />
          </StyledLabelAndInput>
        );
      })}
      <label htmlFor="description">
        <FormattedMessage
          id="AddTodoDescription"
          defaultMessage="Description (optional)"
        />
      </label>
      <textarea
        value={todoDetails.description}
        id="description"
        name="description"
        onChange={handleChange}
        data-testid="description-textarea"
      />
      <StyledBtn onClick={submitTodo} isDarkMode={isDarkMode}>
        {loading ? (
          <FormattedMessage
            id="AddTodoLoadingBtn"
            defaultMessage="Adding Todo..."
          />
        ) : (
          <FormattedMessage id="AddTodoBtn" defaultMessage="Add Todo" />
        )}
      </StyledBtn>
      <ErrorMessageContainer
        err={status.errors?.length > 0}
        isDarkMode={isDarkMode}
      >
        {status.errors?.length > 0 && (
          <FormattedMessage
            id="AddTodoFieldsToFillUp"
            defaultMessage="Please fill up the rest of required fields"
          />
        )}
        {status.added && (
          <FormattedMessage
            id="AddTodoSuccess"
            defaultMessage="Successfully added Todo"
          />
        )}
      </ErrorMessageContainer>
    </Wrapper>
  );
}
