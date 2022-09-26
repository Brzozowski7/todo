import { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { messages } from "../../App/App.const";
import Navbar from "./Navbar";
import {
  DarkModeContext,
  DarkModeContextProvider,
} from "../../contexts/DarkModeContext";

describe("testing navbar component", () => {
  function NavbarMock() {
    const [search, setSearch] = useState("");
    const [language, setLanguage] = useState("en");
    return (
      <IntlProvider
        messages={messages[language as keyof typeof messages]}
        locale={language}
        defaultLocale="en"
      >
        <BrowserRouter>
          <Navbar
            setLanguage={setLanguage}
            language={language}
            setSearch={setSearch}
            search={search}
          />
        </BrowserRouter>
      </IntlProvider>
    );
  }

  test("renders logo correctly", async () => {
    render(<NavbarMock />);
    const logo = screen.getByText(/Todoly/i);
    expect(logo).toBeInTheDocument();
  });

  test("renders mode icon correctly", async () => {
    render(<NavbarMock />);
    const svgEl = screen.getByTitle("mode icon");
    expect(svgEl).toBeInTheDocument();
  });
  test("renders language icon correctly", async () => {
    render(<NavbarMock />);
    expect(screen.getByTestId("language-img")).toBeInTheDocument();
  });
  test("changes dark mode on click", () => {
    render(
      <DarkModeContextProvider>
        <NavbarMock />
        <DarkModeContext.Consumer>
          {(value) => <span>Dark mode: {value.isDarkMode.toString()}</span>}
        </DarkModeContext.Consumer>
      </DarkModeContextProvider>
    );
    const darkModeIcon = screen.getByTitle("mode icon");
    expect(screen.getByText("Dark mode: false")).toBeTruthy();
    fireEvent.click(darkModeIcon);
    expect(screen.getByText("Dark mode: true")).toBeTruthy();
  });

  test("show all languages after click", () => {
    render(<NavbarMock />);
    const flagEl = screen.getByAltText("en");
    fireEvent.click(flagEl);
    const frFlag = screen.getByAltText("fr");
    const enFlag = screen.getByAltText("en");
    const deFlag = screen.getByAltText("de");
    expect(frFlag).toBeInTheDocument();
    expect(enFlag).toBeInTheDocument();
    expect(deFlag).toBeInTheDocument();
  });

  test("changes language to fr", () => {
    render(<NavbarMock />);
    const flagEl = screen.getByTestId("language-img");
    fireEvent.click(flagEl);
    const frFlag = screen.getByAltText("fr");
    fireEvent.click(frFlag);
    expect(screen.getByTestId("language-img")).toBe(screen.getByAltText("fr"));
  });
  test("changes language to de", () => {
    render(<NavbarMock />);
    const flagEl = screen.getByTestId("language-img");
    fireEvent.click(flagEl);
    const deFlag = screen.getByAltText("de");
    fireEvent.click(deFlag);
    expect(screen.getByTestId("language-img")).toBe(screen.getByAltText("de"));
  });
  test("changes language to en", () => {
    render(<NavbarMock />);
    const flagEl = screen.getByTestId("language-img");
    fireEvent.click(flagEl);
    const enFlag = screen.getByAltText("en");
    fireEvent.click(enFlag);
    expect(screen.getByTestId("language-img")).toBe(screen.getByAltText("en"));
  });
});
