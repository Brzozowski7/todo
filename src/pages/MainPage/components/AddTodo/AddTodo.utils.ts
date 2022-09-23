import { pallete } from "../../../../misc/pallete";

export const checkTodo = (todo: ITodoDetails) => {
  let errors: string[] = [];
  Object.keys(todo).forEach((key) => {
    const value = todo[key as keyof ITodoDetails];
    if (value === "" && key !== "description" && key !== "urgent") {
      errors.push(key);
    }
  });
  return errors;
};

export const guessInformationColor = (isDarkMode: boolean, error: boolean) => {
  if (isDarkMode && error) {
    return pallete.DarkRed;
  } else if (!isDarkMode && error) {
    return pallete.Red;
  } else {
    return pallete.DarkGreen;
  }
};
