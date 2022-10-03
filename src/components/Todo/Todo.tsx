import { useContext, useState } from "react";
import { FormattedMessage, injectIntl, IntlShape } from "react-intl";
import { DocumentData } from "firebase/firestore";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faExclamation, faX } from "@fortawesome/free-solid-svg-icons";
import {
  TodoWrapper,
  TipContainer,
  IconsContainer,
  BasicTaskInfo,
} from "./Todo.styles";
import { DarkModeContext } from "../../contexts/DarkModeContext/DarkModeContext";
import { deleteTodo, toggleIsComplete, toggleIsUrgent } from "./Todo.utils";

interface TodoProps {
  todo: DocumentData;
  intl: IntlShape;
}

function Todo({ todo, intl }: TodoProps) {
  const { isDarkMode } = useContext(DarkModeContext);
  const [isHovering, setIsHovering] = useState(false);

  return (
    <TodoWrapper
      isDarkMode={isDarkMode}
      urgent={todo.urgent}
      completed={todo.completed}
      data-testid="todo-wrapper"
    >
      <BasicTaskInfo
        to={"/todo/" + todo.id}
        isDarkMode={isDarkMode}
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
        data-testid="todo-info-container"
      >
        <h2>{todo.task}</h2>
        <p> {todo.name}</p>
        <TipContainer>
          {isHovering && (
            <FormattedMessage
              id="TodoHoverInformation"
              defaultMessage="Click to see details"
            />
          )}
        </TipContainer>
      </BasicTaskInfo>
      <IconsContainer >
        <FontAwesomeIcon
          onClick={() => toggleIsComplete(todo.completed, todo.id)}
          icon={faCheck}
          size="xl"
          title={
            todo.completed
              ? intl.formatMessage({
                  id: "TodoThingToDo",
                  defaultMessage: "Click to mark as thing to do",
                })
              : intl.formatMessage({
                  id: "TodoThingDone",
                  defaultMessage: "Click to mark as done",
                })
          }
          data-testid="complete-icon"
        />
        <FontAwesomeIcon
          onClick={() => deleteTodo(todo.id)}
          icon={faX}
          size="xl"
          title={intl.formatMessage({
            id: "TodoRemove",
            defaultMessage: "Click to remove",
          })}
          data-testid="remove-icon"
        />
        <FontAwesomeIcon
          onClick={() => toggleIsUrgent(todo.urgent, todo.id)}
          icon={faExclamation}
          size="xl"
          title={
            todo.urgent
              ? intl.formatMessage({
                  id: "TodoRemoveUrgent",
                  defaultMessage: "Click to remove urgent status",
                })
              : intl.formatMessage({
                  id: "TodoAddUrgent",
                  defaultMessage: "Click to mark as urgent",
                })
          }
          data-testid="urgent-icon"
        />
      </IconsContainer>
    </TodoWrapper>
  );
}
export default injectIntl(Todo);
