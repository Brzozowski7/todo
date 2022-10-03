import { guessInformationColor } from "../AddTodo.utils";
import { pallete } from "../../../../../misc/pallete";

describe("Setting color function", () => {
  test.each([
    {
      isDarkMode: true,
      error: true,
      expected: pallete.DarkRed,
    },
    {
      isDarkMode: false,
      error: true,
      expected: pallete.Red,
    },
    {
      isDarkMode: false,
      error: false,
      expected: pallete.DarkGreen,
    },
  ])(
    "checking if correct color is returned",
    ({ isDarkMode, error, expected }) => {
      expect(guessInformationColor(isDarkMode, error)).toBe(expected);
    }
  );
});
