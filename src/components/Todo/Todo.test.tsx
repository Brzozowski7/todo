import { fireEvent, render, screen } from "@testing-library/react";
import Todo from "./Todo";
import { pallete } from "../../misc/pallete";
import {
  testTodo,
  testCompletedTodo,
  testUrgentTodo,
} from "../../misc/testValues";
import withProviders from "../../hoc/withProviders";

const TodoWithProviders = withProviders(Todo);

describe("testing todo component", () => {
  
  test("renders task name correctly", () => {
    //when
    render(<TodoWithProviders language="en" todo={testTodo} />);
    //then
    expect(screen.getByText(testTodo.task)).toBeInTheDocument();
  });
  test("renders creator name correctly", () => {
    //when
    render(<TodoWithProviders language="en" todo={testTodo} />);
    //then
    expect(screen.getByText(testTodo.name)).toBeInTheDocument();
  });
  test.each([
    { id: "complete-icon" },
    { id: "remove-icon" },
    { id: "urgent-icon" },
  ])("all icons are rendered", ({ id }) => {
    //when
    render(<TodoWithProviders language="en" todo={testTodo} />);
    //then
    expect(screen.getByTestId(id)).toBeInTheDocument();
  });
  test("renders information on hover", () => {
    //when
    render(<TodoWithProviders language="en" todo={testTodo} />);
    fireEvent.mouseOver(screen.getByTestId("todo-info-container"));
    //then
    expect(screen.getByText(/Click to see details/i)).toBeInTheDocument();
  });
  test("changes color to green when complete", () => {
    //when
    render(<TodoWithProviders language="en" todo={testCompletedTodo} />);
    //then
    expect(screen.getByTestId("todo-wrapper")).toHaveStyle(
      `background-color:${pallete.Green}`
    );
  });
  test("changes color to red when urgent", () => {
    //when
    render(<TodoWithProviders language="en" todo={testUrgentTodo} />);
    //then
    expect(screen.getByTestId("todo-wrapper")).toHaveStyle(
      `background-color:${pallete.Red}`
    );
  });
});
