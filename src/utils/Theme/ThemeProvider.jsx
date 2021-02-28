import { ThemeProvider as StyledThemeProvider } from "styled-components";

import { useFontSize, useThemeMode } from '../../hooks/theme'
import GlobalStyle from './GlobalStyle'

// Theme provider
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ children }) => {
  const { globalColors, themeColors, themeModeColors } = useThemeMode();
  const { fontSize } = useFontSize()

  const appTheme = {
    globalColors,
    fontSize,
    ...themeColors,
    ...themeModeColors,
  }

  console.log(appTheme);

  return (
    <StyledThemeProvider theme={appTheme}>
      <>
        <GlobalStyle />
        {children}
      </>
    </StyledThemeProvider>
  );
};
