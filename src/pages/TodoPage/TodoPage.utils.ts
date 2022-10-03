export const calculateTimeLeft = (deadline: string) => {
  const deadlineDate = parseFloat(deadline);
  const dateNow = Date.now();
  let diffInMilliSeconds = deadlineDate - dateNow;
  const days = Math.floor(diffInMilliSeconds / 86400000); // 86400000 is number of miliseconds in one day
  diffInMilliSeconds -= days * 86400000;
  const hours = Math.floor(diffInMilliSeconds / 3600000); //3600000 is number of miliseconds in one hour
  return { days, hours };
};
