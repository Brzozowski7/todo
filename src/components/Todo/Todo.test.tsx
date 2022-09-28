import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { DocumentData } from "firebase/firestore";
import { fireEvent, render, screen } from "@testing-library/react";
import { messages } from "../../App/App.const";
import Todo from "./Todo";
import { pallete } from "../../misc/pallete";
import {
  testTodo,
  testCompletedTodo,
  testUrgentTodo,
} from "../../misc/testValues";

interface TodoMockProps {
  todo: DocumentData;
}

describe("testing todo component", () => {
  const language = "en";
  function TodoMock({ todo }: TodoMockProps) {
    return (
      <IntlProvider
        messages={messages[language as keyof typeof messages]}
        locale={language}
        defaultLocale="en"
      >
        <BrowserRouter>
          <Todo todo={todo} />
        </BrowserRouter>
      </IntlProvider>
    );
  }
  test("renders task name correctly", () => {
    //when
    render(<TodoMock todo={testTodo} />);
    //then
    expect(screen.getByText(testTodo.task)).toBeInTheDocument();
  });
  test("renders creator name correctly", () => {
    //when
    render(<TodoMock todo={testTodo} />);
    //then
    expect(screen.getByText(testTodo.name)).toBeInTheDocument();
  });
  test.each([
    { id: "complete-icon" },
    { id: "remove-icon" },
    { id: "urgent-icon" },
  ])("all icons are rendered", ({ id }) => {
    //when
    render(<TodoMock todo={testTodo} />);
    //then
    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
  test("renders information on hover", () => {
    //when
    render(<TodoMock todo={testTodo} />);
    fireEvent.mouseOver(screen.getByTestId("todo-info-container"));
    //then
    expect(screen.getByText(/Click to see details/i)).toBeInTheDocument();
  });
  test("changes color to green when complete", () => {
    //when
    render(<TodoMock todo={testCompletedTodo} />);
    //then
    expect(screen.getByTestId("todo-wrapper")).toHaveStyle(
      `background-color:${pallete.Green}`
    );
  });
  test("changes color to red when urgent", () => {
    //when
    render(<TodoMock todo={testUrgentTodo} />);
    //then
    expect(screen.getByTestId("todo-wrapper")).toHaveStyle(
      `background-color:${pallete.Red}`
    );
  });
});
