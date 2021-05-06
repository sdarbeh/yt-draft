import { ThemeProvider as StyledThemeProvider } from "styled-components";
import { ThemeProvider as MuiThemeProver, createMuiTheme } from '@material-ui/core'

import { useAppSize, useThemeMode } from 'app/hooks/theme'

import { mediaQ, controls } from "utils/constants/media-queries";
import { globalColors, themeColors } from './colors/appColors'
import GlobalStyle from './other/GlobalStyle'
import { zindex } from './other'

// Theme provider
const ThemeProvider =  ({ children }: any) => {
  const { currentThemeMode, themeModeColors } = useThemeMode() as any
  const { font, icon, fontSizes, iconSizes} = useAppSize()

  const appTheme = {
    globalColors,
    font,
    icon,
    zindex,
    fontSizes,
    iconSizes,
    textTheme: currentThemeMode === 'light' ? themeModeColors.light.alpha : themeModeColors.alpha,
    ...themeModeColors,
    ...themeColors[currentThemeMode],
    mediaQuery: {
      ...mediaQ,
      ...controls
    },
  }

  console.log('appTheme:', appTheme);

  const muiTheme = createMuiTheme({
    palette: {
      type: currentThemeMode === 'light' ? 'dark' : 'light',
      primary: {
        main: themeColors[currentThemeMode].primary,
      },
      text: {
        primary: themeModeColors.charlie,
      },
    },
    typography: {
      fontFamily: ['Poppins', 'sans-serif'].join(','),
      fontSize: parseInt(font.normal.split('p')[0]),
    }
  });

  return (
    <StyledThemeProvider theme={appTheme}>
      <>
        <GlobalStyle />
        <MuiThemeProver theme={muiTheme}>
          {children}
        </MuiThemeProver>
      </>
    </StyledThemeProvider>
  );
};

export default ThemeProvider
