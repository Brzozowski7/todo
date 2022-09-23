import { checkTodo } from "../AddTodo.utils";
import { fakeFormInput } from "../../../../../misc/testValues";

describe("function is checking if inputs aren't empty and returns their name if they are(doesn't check description and urgent)", () => {
  test.each([
    { formData: fakeFormInput[0], expected: [] },
    { formData: fakeFormInput[1], expected: ["name", "deadline"] },
    { formData: fakeFormInput[2], expected: ["task", "deadline"] },
    { formData: fakeFormInput[3], expected: ["task", "name", "deadline"] },
    { formData: fakeFormInput[4], expected: ["task", "name"] },
  ])("checking if returns empty input's names", ({ formData, expected }) => {
    expect(checkTodo(formData)).toStrictEqual(expected);
  });
});
