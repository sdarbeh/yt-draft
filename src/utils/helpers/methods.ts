import Cookies from "js-cookie";

import { theme_cookie, font_cookie } from "../constants/app";
// all methods thats not relating to texts

/// ------------------------- Clears all app cookies
export const clearCookies = () => {
  // removes token, theming and user font size
  Cookies.remove(theme_cookie);
  Cookies.remove(font_cookie);
};

export const getHashPaths = () => {
  const { hash } = window.location
  return hash.replace('#', '')
}

export const convertPath = (path: string) => path.split('-').join(' ')