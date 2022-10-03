import guessTodoColor from "../guessTodoColor";
import { pallete } from "../../misc/pallete";

describe("Setting color function", () => {
  test.each([
    {
      isDarkMode: true,
      isCompleted: true,
      isUrgent: true,
      expected: pallete.DarkGreen,
    },
    {
      isDarkMode: false,
      isCompleted: true,
      isUrgent: true,
      expected: pallete.Green,
    },
    {
      isDarkMode: true,
      isCompleted: false,
      isUrgent: true,
      expected: pallete.DarkRed,
    },
    {
      isDarkMode: false,
      isCompleted: false,
      isUrgent: true,
      expected: pallete.Red,
    },
    {
      isDarkMode: true,
      isCompleted: false,
      isUrgent: false,
      expected: pallete.VeryDarkGray,
    },
    {
      isDarkMode: false,
      isCompleted: false,
      isUrgent: false,
      expected: pallete.VeryLightGray,
    },
  ])(
    "checking if correct color is returned",
    ({ isDarkMode, isCompleted, isUrgent, expected }) => {
      expect(guessTodoColor(isDarkMode, isCompleted, isUrgent)).toBe(expected);
    }
  );
});
