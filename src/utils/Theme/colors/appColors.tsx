import { themeModeColors } from './themeModes'

// APP COLORS
// global colors - used through app
export const globalColors = {
    error: "rgb(199, 0, 57)",
    warn: 'rgb(255,204,0)',
    success: "rgb(75,181,67)",
    white: themeModeColors.light.alpha,
    black: themeModeColors.dark.alpha,
}

export const themeColors = {
    light: {
        primary: 'rgb(188,174,137)',
        secondary: '',
        accent: ''
    },
    dim: {
        primary: 'rgb(132,114,82)',
        secondary: '',
        accent: ''
    },
    dark: {
        primary: 'rgb(132,114,82)',
        secondary: '',
        accent: ''
    }
} 