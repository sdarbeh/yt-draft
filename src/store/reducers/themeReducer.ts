import Cookies from "js-cookie";
import { SET_THEME_MODE } from "store/actions/themeAction";
import { theme_cookie } from "utils/constants/app";
import { getThemeModes } from "utils/Theme/colors/themeModes";

interface actionInterface {
  type: string;
  mode: string;
}

const themeModes = getThemeModes();

const getTimeOfDayColor = () => {
  const hr = new Date().getHours();
  const { light, dim, dark } = themeModes
  if (hr >= 7 && hr < 16) { // 7am - 4pm
    return light
  } else if (hr >= 16 || hr < 21) { //4pm - 9pm
    return dim
  } else {
    return dark // 8pm - 7am
  }
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state: any, action: actionInterface) => {
  const { type, mode } = action;

  const storage: any = Cookies.get(theme_cookie)

  switch (type) {
    case SET_THEME_MODE:
      for (const tmode in themeModes) {
        if (mode === tmode) {
          Cookies.set(theme_cookie, mode);
          return (state = mode);
        }
      }
      break;
    default:
      return storage ? storage : (state = getTimeOfDayColor());
  }
};
