import { pallete } from "../misc/pallete";


const guessTodoColor = (isDarkMode:boolean, isCompleted:boolean, isUrgent:boolean) => {
  if (isDarkMode && isCompleted) {
    return pallete.DarkGreen;
  } else if (!isDarkMode && isCompleted) {
    return pallete.Green;
  } else if (isDarkMode && isUrgent) {
    return pallete.DarkRed;
  } else if (!isDarkMode && isUrgent) {
    return pallete.Red;
  } else if (isDarkMode && !isUrgent && !isCompleted) {
    return pallete.VeryDarkGray;
  } else {
    return pallete.VeryLightGray;
  }
};
export default guessTodoColor;
