import { fireEvent, render, screen } from "@testing-library/react";
import { DarkModeContext, DarkModeContextProvider } from "./DarkModeContext";

describe("DarkMode context", () => {
  test("darkmode is false by default", () => {
    render(
      <DarkModeContextProvider>
        <DarkModeContext.Consumer>
          {(value) => <span>Dark mode: {value.isDarkMode.toString()}</span>}
        </DarkModeContext.Consumer>
      </DarkModeContextProvider>
    );
    expect(screen.getByText("Dark mode: false")).toBeTruthy();
  });
  test("changes dark mode", () => {
    render(
      <DarkModeContextProvider>
        <DarkModeContext.Consumer>
          {(value) => (
            <>
              <span>Dark mode: {value.isDarkMode.toString()}</span>
              <button onClick={value.toggleIsDarkMode}>DarkMode</button>
            </>
          )}
        </DarkModeContext.Consumer>
      </DarkModeContextProvider>
    );
    expect(screen.getByText("Dark mode: false")).toBeTruthy();
    fireEvent.click(screen.getByText("DarkMode"));
    expect(screen.getByText("Dark mode: true")).toBeTruthy();
  });
});
