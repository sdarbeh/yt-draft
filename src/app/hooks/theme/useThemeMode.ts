import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

import { setThemeMode } from "store/app/theme/action";
// THEME MODES
import {
  getThemeModes,
  getThemeModesArray,
  themeModeColors,
} from "utils/theme/colors/themeModes";

const Mode = () => {
  const { mode } = useSelector((state: RootState) => state.app_theme);
  const dispatch = useDispatch();

  return {
    // ------- theme mode
    currentThemeMode: mode,
    // theme mode colors for components not styled with styled components
    // see src/utils/Theme
    themeModeColors: themeModeColors[mode],
    themeModes: getThemeModes(),
    themeModesArray: getThemeModesArray(),
    setThemeMode: (mode: string) => dispatch(setThemeMode(mode))
  };
};

export default Mode
