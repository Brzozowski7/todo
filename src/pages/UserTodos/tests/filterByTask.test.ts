import { filterByTask } from "../UserTodos.utils";
import { fakeArray } from "../../../misc/testValues";

describe("Filter function", () => {
  test.each([
    { searchWord: "nad", expected: [] },
    { searchWord: "Shop", expected: [{ name: "Anna", task: "shopping" }] },
    {
      searchWord: "sHO",
      expected: [
        { name: "Anna", task: "shopping" },
        { name: "Robert", task: "Sho" },
      ],
    },
    { searchWord: "Homeworkkk", expected: [] },
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
        fakeArray.filter((item) => filterByTask(item.task, searchWord))
      ).toStrictEqual(expected);
    }
  );
});
