import { fireEvent, render, screen } from "@testing-library/react";
import Searchbar from "./Searchbar";
import withProviders from "../../../../hoc/withProviders";

const mockSetState = jest.fn();
const SearchbarWithProviders = withProviders(Searchbar);

describe("searchbar component tests", () => {
  test("renders input correctly", () => {
    //when
    render(
      <SearchbarWithProviders
        language="en"
        setSearch={mockSetState}
        search=""
      />
    );
    //then
    expect(screen.getByTestId("search-input")).toBeInTheDocument();
  });
  test("renders search icon correctly", () => {
    //when
    render(
      <SearchbarWithProviders
        language="en"
        setSearch={mockSetState}
        search=""
      />
    );
    //then
    expect(screen.getByTitle("search icon")).toBeInTheDocument();
  });
  test("calls state function on input change", () => {
    //given
    const testValue = "test";
    //when
    render(
      <SearchbarWithProviders
        language="en"
        setSearch={mockSetState}
        search=""
      />
    );
    fireEvent.change(screen.getByTestId("search-input"), {
      target: { value: testValue },
    });
    //then
    expect(mockSetState).toHaveBeenCalledTimes(1);
    expect(mockSetState).toHaveBeenCalledWith(testValue);
  });
});
