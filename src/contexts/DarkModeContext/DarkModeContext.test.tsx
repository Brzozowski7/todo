import { fireEvent, render, screen } from "@testing-library/react";
import { DarkModeContext, DarkModeContextProvider } from "./DarkModeContext";

describe("DarkMode context", () => {
  test("darkmode is false by default", () => {
    //when
    render(
      <DarkModeContextProvider>
        <DarkModeContext.Consumer>
          {(value) => <span>Dark mode: {value.isDarkMode.toString()}</span>}
        </DarkModeContext.Consumer>
      </DarkModeContextProvider>
    );
    //then
    expect(screen.getByText("Dark mode: false")).toBeTruthy();
  });
  test("changes dark mode", () => {
    //when
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
    //then
    expect(screen.getByText("Dark mode: false")).toBeTruthy();
    //when
    fireEvent.click(screen.getByText("DarkMode"));
    //then
    expect(screen.getByText("Dark mode: true")).toBeTruthy();
  });
});
