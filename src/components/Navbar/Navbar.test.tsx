import { fireEvent, render, screen } from "@testing-library/react";
import Navbar from "./Navbar";
import withProviders from "../../hoc/withProviders";
import { languages } from "../../misc/languagesList";

const mockSetState = jest.fn();

const NavbarWithProviders = withProviders(Navbar);

describe("testing navbar component", () => {
  test("renders logo correctly", () => {
    render(<NavbarWithProviders language="en" search="" />);
    const logo = screen.getByText(/Todoly/i);
    expect(logo).toBeInTheDocument();
  });

  test("renders mode icon correctly", () => {
    render(<NavbarWithProviders language="en" search="" />);
    const svgEl = screen.getByTestId("mode-icon");
    expect(svgEl).toBeInTheDocument();
  });
  test("renders language icon correctly", () => {
    render(<NavbarWithProviders language="en" search="" />);
    const flagEl = screen.getByTestId("language-img");
    expect(flagEl).toBeInTheDocument();
  });

  test("changes dark mode on click", () => {
    render(<NavbarWithProviders language="en" search="" />);
    const darkModeIcon = screen.getByTestId("mode-icon");
    expect(screen.getByTitle("moon-icon")).toBeInTheDocument();
    fireEvent.click(darkModeIcon);
    expect(screen.getByTitle("sun-icon")).toBeInTheDocument();
  });

  test("show all languages after click", () => {
    //when
    render(<NavbarWithProviders language="en" search="" />);
    const flagEl = screen.getByTestId("language-img");
    fireEvent.click(flagEl);
    //then
    expect(screen.queryAllByTestId("language-choice-img")).toHaveLength(
      languages.length
    );
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
      render(
        <NavbarWithProviders
          setLanguage={mockSetState}
          language="en"
          search=""
        />
      );
      const flagEl = screen.getByTestId("language-img");
      fireEvent.click(flagEl);
      const currentFlag = screen.getByAltText(alt);
      fireEvent.click(currentFlag);
      //then
      expect(screen.getByAltText(alt)).toBeInTheDocument();
    }
  );
});
