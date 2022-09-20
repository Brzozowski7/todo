interface ITodoDetails {
  task: string;
  description: string;
  name: string;
  deadline: string;
}

export const checkTodo = (todo: ITodoDetails) => {
  let errors: string[] = [];
  Object.keys(todo).forEach((key) => {
    const value = todo[key as keyof typeof todo];
    if (value === "" && key !== "description" && key !== "urgent") {
      errors.push(key);
    }
  });
  return errors;
};
