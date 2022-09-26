import { useState } from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { IntlProvider } from "react-intl";
import Searchbar from "./Searchbar";
import { messages } from "../../../../App/App.const";
import { BrowserRouter } from "react-router-dom";

describe("searchbar component tests", () => {
  function SearchbarMock() {
    const [language, setLanguage] = useState("en");
    const [search, setSearch] = useState("");
    return (
      <IntlProvider
        messages={messages[language as keyof typeof messages]}
        locale={language}
        defaultLocale="en"
      >
        <BrowserRouter>
          <Searchbar setSearch={setSearch} search={search} />;
        </BrowserRouter>
      </IntlProvider>
    );
  }
  const resizeWindow = (x: number, y: number) => {
    window.innerWidth = x;
    window.innerHeight = y;
    window.dispatchEvent(new Event("resize"));
  };

  test("renders input correctly", () => {
    render(<SearchbarMock />);
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });
  test("renders search icon correctly", () => {
    render(<SearchbarMock />);
    expect(screen.getByTitle("search icon")).toBeInTheDocument();
  });
  test.skip("input is not visible by default on small resolution", () => {
    resizeWindow(500,500)
    render(<SearchbarMock />);
    console.log("innerwidth:",window.innerWidth)
    expect(screen.getByTestId("search-input")).not.toBeVisible();
  });
});
