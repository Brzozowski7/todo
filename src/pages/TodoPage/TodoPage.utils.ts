export const calculateTimeLeft = (deadline: string) => {
  const deadlineDate = parseFloat(deadline);
  const dateNow = Date.now();
  let diffInMilliSeconds = deadlineDate - dateNow;
  if (diffInMilliSeconds < 0) {
    const days = Math.round(diffInMilliSeconds / 86400000); // 86400000 is number of miliseconds in one day
    diffInMilliSeconds -= days * 86400;
    const hours = Math.round(diffInMilliSeconds / 3600000); //3600000 is number of miliseconds in one hour
    return { days, hours };
  } else {
    const days = Math.floor(diffInMilliSeconds / 86400000); // 86400000 is number of miliseconds in one day
    diffInMilliSeconds -= days * 86400;
    const hours = Math.floor(diffInMilliSeconds / 3600000); //3600000 is number of miliseconds in one hour
    return { days, hours };
  }
};
