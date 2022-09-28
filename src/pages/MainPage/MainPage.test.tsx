import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import MainPage from "./MainPage";
import { messages } from "../../App/App.const";

interface MainPageMockProps {
  search: string;
}

describe("testing todo component", () => {
  const language = "en";
  function MainPageMock({ search }: MainPageMockProps) {
    return (
      <IntlProvider
        messages={messages[language as keyof typeof messages]}
        locale={language}
        defaultLocale="en"
      >
        <BrowserRouter>
          <MainPage search={search} />
        </BrowserRouter>
      </IntlProvider>
    );
  }
  test("renders btn to add todo", () => {
    //when
    render(<MainPageMock search="" />);
    //then
    expect(screen.getByText("+")).toBeInTheDocument();
  });
  test("shows addTodo menu on btn click", async () => {
    //when
    render(<MainPageMock search="" />);
    expect(screen.getByTestId("AddTodo-form-wrapper")).not.toBeVisible();
    fireEvent.click(screen.getByText("+"));
    //then
    await waitFor(() => {
        expect(screen.getByTestId("AddTodo-form-wrapper")).toBeVisible();
    });
  });
});
