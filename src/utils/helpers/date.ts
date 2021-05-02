// https://momentjs.com/docs/
import moment from "moment";

// methods relating to dates

export const getTimeOfDay = () => {
  const hr = new Date().getHours();
  
  if (hr >= 7 && hr < 16) { // 7am - 4pm
    return 'morning'
  } else if (hr >= 16 || hr < 21) { //4pm - 9pm
    return 'evening'
  } else {
    return 'night' // 8pm - 7am
  }
}

export const timeAgo = (date: string) => moment(date).fromNow();

export const dateToYear = (date: string) => new Date(date).getFullYear()
