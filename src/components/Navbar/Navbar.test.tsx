import { useState } from "react";
import { IntlProvider } from "react-intl";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import { messages } from "../../App/App.const";
import Navbar from "./Navbar";

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
    const flagEl = screen.getByAltText("en");
    expect(flagEl).toBeInTheDocument();
  });

});
