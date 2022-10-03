import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MainPage from "./MainPage";
import withProviders from "../../hoc/withProviders";

let todosMock = [
  { id: "1", name: "abc1", task: "zxc1" },
  { id: "2", name: "abc2", task: "zxc2" },
  { id: "3", name: "abc3", task: "zxc3" },
];

jest.mock("./useDbData", () => ({
  __esModule: true,
  default: () => todosMock,
}));

const MainPageWithProviders = withProviders(MainPage);

describe("MainPage test", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders btn to add todo", () => {
    //when
    render(<MainPageWithProviders language="en" search="" />);
    //then
    expect(screen.getByText("+")).toBeInTheDocument();
  });
  test("shows addTodo menu on btn click", async () => {
    //when
    render(<MainPageWithProviders language="en" search="" />);
    expect(screen.getByTestId("AddTodo-form-wrapper")).not.toBeVisible();
    fireEvent.click(screen.getByTestId("mainPage-addTodoBtn"));
    //then
    await waitFor(() => {
      expect(screen.getByTestId("AddTodo-form-wrapper")).toBeVisible();
    });
  });
  test("should display todos list", () => {
    //when
    render(<MainPageWithProviders language="en" search="" />);
    const TodosWrapper = screen.getByTestId("main-page-todos-wrapper");
    //then
    expect(TodosWrapper.childElementCount).toBe(todosMock.length);
    todosMock.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
  test("should display one todo with task zxc2", () => {
    //when
    render(<MainPageWithProviders language="en" search="zxc2" />);
    const TodosWrapper = screen.getByTestId("main-page-todos-wrapper");
    //then
    expect(TodosWrapper.childElementCount).toBe(1);
    expect(screen.queryByText("zxc3")).not.toBeInTheDocument();
    expect(screen.queryByText("zxc1")).not.toBeInTheDocument();
    expect(screen.getByText("zxc2")).toBeInTheDocument();
  });
});
