export const filterByNameAndTask = (
  name: string,
  task: string,
  search: string
) => {
  return (
    name.toLowerCase().startsWith(search.toLowerCase()) ||
    task.toLowerCase().startsWith(search.toLowerCase())
  );
};
