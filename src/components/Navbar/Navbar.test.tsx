import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { messages } from "../../App/App.const";
import Navbar from "./Navbar";
import {
  DarkModeContext,
  DarkModeContextProvider,
} from "../../contexts/DarkModeContext/DarkModeContext";

interface NavbarMockProps {
  language: string;
  search: string;
}
describe("testing navbar component", () => {
  const mockSetState = jest.fn();

  function NavbarMock({ language, search }: NavbarMockProps) {
    return (
      <IntlProvider
        messages={messages[language as keyof typeof messages]}
        locale={language}
        defaultLocale="en"
      >
        <BrowserRouter>
          <Navbar
            setLanguage={mockSetState}
            language={language}
            setSearch={mockSetState}
            search={search}
          />
        </BrowserRouter>
      </IntlProvider>
    );
  }

  test("renders logo correctly", () => {
    render(<NavbarMock language="en" search="" />);
    const logo = screen.getByText(/Todoly/i);
    expect(logo).toBeInTheDocument();
  });

  test("renders mode icon correctly", () => {
    render(<NavbarMock language="en" search="" />);
    const svgEl = screen.getByTitle("mode icon");
    expect(svgEl).toBeInTheDocument();
  });
  test.each([{ alt: "fr" }, { alt: "en" }, { alt: "de" }])(
    "renders language icon correctly and with correct language",
    ({ alt }) => {
      render(<NavbarMock language={alt} search="" />);
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    }
  );
  test("changes dark mode on click", () => {
    render(
      <DarkModeContextProvider>
        <NavbarMock language="en" search="" />
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
    //when
    render(<NavbarMock language="en" search="" />);
    const flagEl = screen.getByTestId("language-img");
    fireEvent.click(flagEl);
    //then
    expect(screen.queryAllByTestId("language-choice-img")).toHaveLength(3);
    const frFlag = screen.getByAltText("fr");
    const enFlag = screen.getByAltText("en");
    const deFlag = screen.getByAltText("de");
    expect(frFlag).toBeInTheDocument();
    expect(enFlag).toBeInTheDocument();
    expect(deFlag).toBeInTheDocument();
  });
  test.each([{ alt: "fr" }, { alt: "en" }, { alt: "de" }])(
    "checking if correct flag is set up after choosing language",
    ({ alt }) => {
      //when
      render(<NavbarMock language="en" search="" />);
      const flagEl = screen.getByTestId("language-img");
      fireEvent.click(flagEl);
      const currentFlag = screen.getByAltText(alt);
      fireEvent.click(currentFlag);
      //then
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    }
  );
});
