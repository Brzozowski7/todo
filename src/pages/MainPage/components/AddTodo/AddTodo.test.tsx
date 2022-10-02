import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import AddTodo from "./AddTodo";
import withProviders from "../../../../hoc/withProviders";

describe("testing todo component", () => {
  const AddTodoWithProviders = withProviders(AddTodo);

  test.each([
    { testid: "task-input" },
    { testid: "name-input" },
    { testid: "deadline-input" },
    { testid: "description-textarea" },
  ])("all inputs and textareas are rendered", ({ testid }) => {
    //when
    render(<AddTodoWithProviders language="en" active={true} />);
    //then`
    expect(screen.getByTestId(testid)).toBeInTheDocument();
  });
  test("renders addTodo btn", () => {
    //when
    render(<AddTodoWithProviders language="en" active={true} />);
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
    render(<AddTodoWithProviders language="en" active={true} />);
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
    render(<AddTodoWithProviders language="en" active={true} />);
    fireEvent.change(screen.getByTestId(testid), {
      target: { value: "test value" },
    });
    //then
    expect(setStateMock).toHaveBeenCalled();
  });
});
