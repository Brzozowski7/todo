export const filterByName = (
  task: string,
  search: string
) => {
  return (
    task.toLowerCase().startsWith(search.toLowerCase())
  );
};
