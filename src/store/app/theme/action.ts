export const SET_THEME_MODE = "SET_THEME_MODE";
export const SET_APP_SIZE = "SET_APP_SIZE";

export const setThemeMode = (mode: string) => ({ 
  type: SET_THEME_MODE,
  mode
})

export const setAppSize = (size: string) => ({ 
  type: SET_APP_SIZE,
  size
})