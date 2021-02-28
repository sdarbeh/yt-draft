import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { setThemeMode } from "../../store/actions/themeAction";
import { globalColors, themeColors } from "../../utils/Theme/colors/appColors";

// THEME MODES
import {
  getThemeModes,
  getThemeModesArray,
  themeModeColors
} from "../../utils/Theme/colors/themeModes";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const themeMode: 'light' | 'dim' | 'dark' = useSelector(
    (state: RootState) => state.theme
  );
  
  const dispatch = useDispatch();

  return {
    // ------- theme mode
    currentThemeMode: themeMode,
    // see src/utils/Theme
    themeModeColors: themeModeColors[themeMode],
    themeModes: getThemeModes(),
    themeModesArray: getThemeModesArray(),
    setThemeMode: (mode: string) => dispatch(setThemeMode(mode)),

    themeColors: themeColors[themeMode],
    globalColors,
  };
};
