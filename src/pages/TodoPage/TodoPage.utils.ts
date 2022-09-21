export const calculateTimeLeft = (deadline: string) => {
  const deadlineDate = new Date(deadline).getTime();
  const dateNow = Date.now();
  let diffInMilliSeconds = deadlineDate - dateNow;
  console.log(diffInMilliSeconds);
  const days = Math.floor(diffInMilliSeconds / 86400000);
  diffInMilliSeconds -= days * 86400;
  const hours = Math.floor(diffInMilliSeconds / 3600000) % 24;
  return `${days} days and ${hours} hours`;
};
