import Cookies from "js-cookie";

import { theme_cookie, font_cookie } from "../constants/app";
// all methods thats not relating to texts

/// ------------------------- Clears all app cookies
export const clearCookies = () => {
  // removes token, theming and user font size
  Cookies.remove(theme_cookie);
  Cookies.remove(font_cookie);
};

export const objToArr = (obj: any) =>
  Object.keys(obj).map((key) => [Number(key), obj[key]]);

export const isObjEmpty = (obj: any) => Object.keys(obj).length === 0;

export const routeActive = (route: string, path: string) =>
  route === path ? 1 : 0;

export const censorWord = (str: string) => {
  return str[0] + "*".repeat(str.length - 2) + str.slice(-1);
};

export const censorEmail = (email: string) => {
  const arr = email.split("@");
  return censorWord(arr[0]) + "@" + censorWord(arr[1]);
};
