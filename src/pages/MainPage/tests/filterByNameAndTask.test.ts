import { filterByNameAndTask } from "../MainPage.utils";
import {fakeArray} from "../../../misc/testValues"

describe("Filter function", () => {

  test.each([
    { searchWord: "nad", expected: [] },
    {
      searchWord: "Shop",
      expected: [
        { name: "Anna", task: "shopping" },
      ],
    },
    {
        searchWord: "sho",
        expected: [
          { name: "Anna", task: "shopping" },
          { name: "Robert", task: "Sho" },
        ],
      },
    { searchWord: "Robb", expected: [] },
    {
      searchWord: "Robert",
      expected: [
        { name: "Robert", task: "Sho" },
        { name: "robert", task: "Homework" },
      ],
    },
    {
      searchWord: "HOMEWORK",
      expected: [{ name: "robert", task: "Homework" }],
    },
    { searchWord: "Doctor", expected: [] },
    {
      searchWord: "go to Doctor",
      expected: [{ name: "Walt", task: "Go to Doctor" }],
    },
  ])(
    "checking if filter returns array of objects with task keys values starting with searchWord",
    ({ searchWord, expected }) => {
      expect(
        fakeArray.filter((item) =>
          filterByNameAndTask(item.name, item.task, searchWord)
        )
      ).toStrictEqual(expected);
    }
  );
});
