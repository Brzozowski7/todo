export const filterByTask = (
  task: string,
  search: string
) => {
  return (
    task.toLowerCase().startsWith(search.toLowerCase())
  );
};
