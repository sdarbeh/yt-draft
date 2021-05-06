import Cookies from "js-cookie";

import {
  SET_THEME_MODE,
  SET_APP_SIZE,
} from "./action";
import { getThemeModes } from "utils/theme/colors/themeModes";

import { theme_cookie } from "utils/constants/app";
import { themeInterface } from "utils/theme/other";
import { appSizes } from "utils/theme/app-size";

const modes = getThemeModes();

interface actionInterface {
  type: string;
  mode: string;
  size: string;
}

const theme = (state: themeInterface, action: actionInterface) => {
  const { type, mode, size } = action;

  const storage: themeInterface = JSON.parse(Cookies.get(theme_cookie) || "{}");

  let appTheme: themeInterface = {
    mode: storage && storage.mode ? storage.mode : modes.dim,
    size: storage && storage.size ? storage.size : "regular",
  };

  const isValid = () => ({
    mode: getThemeModes()[mode],
    size: appSizes.find(s => s === size)
  })

  const setCookie = () => {
    Cookies.set(theme_cookie, JSON.stringify(appTheme));
    return (state = appTheme);
  }

  //
  switch (type) {
    case SET_THEME_MODE:
      if (isValid().mode) {
        appTheme.mode = mode
        return setCookie()
      }
      break;
    case SET_APP_SIZE:
      if (isValid().size) {
        appTheme.size = size
        return setCookie()
      }
      break;
    default:
      return state = appTheme;
  }
};

export default theme;
