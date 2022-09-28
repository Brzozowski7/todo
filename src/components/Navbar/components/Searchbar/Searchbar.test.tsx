import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import Searchbar from "./Searchbar";
import { messages } from "../../../../App/App.const";
import { BrowserRouter } from "react-router-dom";

interface SearchbarMockProps {
  search: string;
}

describe("searchbar component tests", () => {
  const mockSetState = jest.fn();
  const language = "en";

  function SearchbarMock({ search }: SearchbarMockProps) {
    return (
      <IntlProvider
        messages={messages[language as keyof typeof messages]}
        locale={language}
        defaultLocale="en"
      >
        <BrowserRouter>
          <Searchbar setSearch={mockSetState} search={search} />;
        </BrowserRouter>
      </IntlProvider>
    );
  }

  test("renders input correctly", () => {
    //when
    render(<SearchbarMock search="" />);
    //then
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });
  test("renders search icon correctly", () => {
    //when
    render(<SearchbarMock search="" />);
    //then
    expect(screen.getByTitle("search icon")).toBeInTheDocument();
  });
  test("calls state function on input change", () => {
    //given
    const testValue = "test"
    //when
    render(<SearchbarMock search="" />);
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: testValue },
    });
    //then
    expect(mockSetState).toHaveBeenCalledWith(testValue);
  });
});
