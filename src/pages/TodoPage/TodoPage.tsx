import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FormattedMessage, FormattedDate } from "react-intl";
import {
  TodoPageWrapper,
  TodoDetailsWrapper,
  StyledLink,
} from "./TodoPage.styles";
import useGetTodoDetails from "./useGetTodoDetails";
import { calculateTimeLeft } from "./TodoPage.utils";
import { DarkModeContext } from "../../contexts/DarkModeContext";

export default function TodoPage() {
  const { isDarkMode } = useContext(DarkModeContext);
  const { todoID } = useParams();
  const todo = useGetTodoDetails(todoID!);
  const { days, hours } = calculateTimeLeft(todo?.deadline);

  return (
    <TodoPageWrapper isDarkMode={isDarkMode}>
      {todo && (
        <TodoDetailsWrapper
          completed={todo.completed}
          urgent={todo.urgent}
          isDarkMode={isDarkMode}
        >
          <h1>{todo.task}</h1>
          <p>
            <FormattedMessage
              id="TodoPageDescription"
              defaultMessage="Description"
            />
            : {todo.description}
          </p>
          <p>
            <FormattedMessage id="TodoPageAddedBy" defaultMessage="Added By" />:{" "}
            {todo.name}
          </p>
          <StyledLink to={"/user/" + todo?.name} isDarkMode={isDarkMode}>
            <FormattedMessage id="AllTodosLink" defaultMessage="All Todos of" />{" "}
            {todo.name}
          </StyledLink>
          <p>
            <FormattedMessage id="TodoPageCreated" defaultMessage="Created" />:{" "}
            <FormattedDate
              value={new Date(todo.createdAt)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </p>
          <p>
            <FormattedMessage id="TodoPageDeadline" defaultMessage="Deadline" />
            :{" "}
            <FormattedDate
              value={new Date(todo.deadline)}
              year="numeric"
              month="long"
              day="2-digit"
            />
          </p>
          <p>
            <FormattedMessage
              id="TodoPageTimeLeft"
              defaultMessage="Time left"
            />
            : {days}{" "}
            <FormattedMessage id="TodoPageDays" defaultMessage="days" /> {hours}{" "}
            <FormattedMessage id="TodoPageHours" defaultMessage="hours" />
          </p>
          <p>
            <FormattedMessage id="TodoPageUrgent" defaultMessage="Urgent" />:{" "}
            {todo.urgent ? (
              <FormattedMessage id="Yes" defaultMessage="Yes" />
            ) : (
              <FormattedMessage id="No" defaultMessage="No" />
            )}
          </p>
          <p>
            <FormattedMessage
              id="TodoPageCompleted"
              defaultMessage="Completed"
            />
            :{" "}
            {todo.completed ? (
              <FormattedMessage id="Yes" defaultMessage="Yes" />
            ) : (
              <FormattedMessage id="No" defaultMessage="No" />
            )}
          </p>
        </TodoDetailsWrapper>
      )}
    </TodoPageWrapper>
  );
}
