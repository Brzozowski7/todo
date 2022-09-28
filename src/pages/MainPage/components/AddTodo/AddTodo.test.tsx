import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import AddTodo from "./AddTodo";
import { messages } from "../../../../App/App.const";
import React from "react";

interface AddTodoMockProps {
  active: boolean;
}

describe("testing todo component", () => {
  const mockSetState = jest.fn();
  const language = "en";
  function AddTodoMock({ active }: AddTodoMockProps) {
    return (
      <IntlProvider
        messages={messages[language as keyof typeof messages]}
        locale={language}
        defaultLocale="en"
      >
        <BrowserRouter>
          <AddTodo active={active} setActive={mockSetState} />
        </BrowserRouter>
      </IntlProvider>
    );
  }
  test.each([
    { testid: "task-input" },
    { testid: "name-input" },
    { testid: "deadline-input" },
    { testid: "description-textarea" },
  ])("all inputs and textareas are rendered", ({ testid }) => {
    //when
    render(<AddTodoMock active={true} />);
    //then
    expect(screen.getByTestId(testid)).toBeInTheDocument();
  });
  test("renders addTodo btn", () => {
    //when
    render(<AddTodoMock active={true} />);
    //then
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  test.each([
    { text: "Task" },
    { text: "Name" },
    { text: "Deadline" },
    { text: "Description (optional)" },
  ])("all labels are rendered", ({ text }) => {
    //when
    render(<AddTodoMock active={true} />);
    //then
    expect(screen.getByText(text)).toBeInTheDocument();
  });
  test.each([
    { testid: "task-input" },
    { testid: "name-input" },
    { testid: "description-textarea" },
  ])("useState setState is called on input/textarea change", ({ testid }) => {
    //given
    const setStateMock = jest.fn();
    const useStateMock: any = (useState: any) => [useState, setStateMock];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);
    //when
    render(<AddTodoMock active={true} />);
    fireEvent.change(screen.getByTestId(testid), {
      target: { value: "test value" },
    });
    //then
    expect(setStateMock).toHaveBeenCalled();
  });
});
