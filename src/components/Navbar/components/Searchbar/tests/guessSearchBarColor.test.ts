import { guessSearchBarColor } from "../Searchbar.utils";
import { pallete } from "../../../../../misc/pallete";

describe("Setting color function", () => {
  test.each([
    { isDarkMode: true, active: true, expected: pallete.DarkGray },
    { isDarkMode: false, active: true, expected: pallete.VeryLightGray },
    { isDarkMode: true, active: false, expected: pallete.Black },
    { isDarkMode: false, active: false, expected: pallete.AlmostWhite },
  ])(
    "checking if correct color is returned",
    ({ isDarkMode, active, expected }) => {
      expect(guessSearchBarColor(isDarkMode, active)).toBe(expected);
    }
  );
});
