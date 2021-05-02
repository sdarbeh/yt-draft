import Cookies from "js-cookie";
import { SET_THEME_MODE } from "store/actions/themeAction";
import { theme_cookie } from "utils/constants/app";
import { getTimeOfDay } from "utils/helpers/date";
import { getThemeModes } from "utils/Theme/colors/themeModes";

interface actionInterface {
  type: string;
  mode: string;
}

const themeModes = getThemeModes();

const getTimeOfDayColor = () => {
  const time = getTimeOfDay()
  const { light, dim, dark } = themeModes

  switch (time) {
    case 'morning':
      return light
    case 'evening':
      return dim
    case 'night':
      return dark
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
