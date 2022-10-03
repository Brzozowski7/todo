import { render, screen } from "@testing-library/react";
import UserTodos from "./UserTodos";
import withProviders from "../../hoc/withProviders";

const todosMock = [
  { id: "1", name: "abc1", task: "zxc1" },
  { id: "2", name: "abc2", task: "zxc2" },
  { id: "3", name: "abc3", task: "zxc3" },
];

const UserTodosWithProviders = withProviders(UserTodos);

jest.mock("./useGetUserTodos", () => ({
  __esModule: true,
  default: () => todosMock,
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"), // use actual for all non-hook parts
  useParams: () => ({
    user: "Test User",
  }),
}));

describe("UserTodos tests", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test.each([
    { lang: "fr", title: "Toutes les tâches de Test User" },
    { lang: "en", title: "All Todos of Test User" },
    { lang: "de", title: "Alle Todos von Test User" },
  ])(
    "checking if correct heading is displayed",
    ({ lang, title }) => {
      //when
      render(<UserTodosWithProviders language={lang} search={"zxc"} />);
      const Heading = screen.getByTestId("user-todos-heading");
      //then
      expect(Heading.textContent).toBe(title);
    }
  );

  test("should display todos list", () => {
    //when
    render(<UserTodosWithProviders language="en" search={"zxc"} />);
    const TodosWrapper = screen.getByTestId("user-todos-wrapper");
    //then
    expect(TodosWrapper.childElementCount).toBe(todosMock.length);
    todosMock.forEach((item) => {
      expect(screen.getByText(item.name)).toBeInTheDocument();
    });
  });
  test("should display one todo with task zxc1", () => {
    //when
    render(<UserTodosWithProviders language="en" search="zxc1" />);
    const TodosWrapper = screen.getByTestId("user-todos-wrapper");
    //then
    expect(TodosWrapper.childElementCount).toBe(1);
    expect(screen.queryByText("abc2")).not.toBeInTheDocument();
    expect(screen.queryByText("zxc3")).not.toBeInTheDocument();
    expect(screen.getByText("zxc1")).toBeInTheDocument();
  });
});
