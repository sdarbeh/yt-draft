export const themeModeColors = {
  light: {
    alpha: 'rgb(255,255,255)',
    bravo: 'rgb(227,230,234)',
    medium: 'rgb(178,184,195)',
    charlie: 'rgb(15,15,15)',
    sBravo: 'rgba(227,230,234,.7)',
    btnShadow: 'rgba(101, 119, 134, 0.2) 0px 0px 7px, rgba(101, 119, 134, 0.15) 0px 1px 3px 1px'
  },
  dim: {
    alpha: 'rgb(24,25,26)',
    bravo: 'rgb(36,37,38)',
    medium: 'rgb(100,100,100)',
    charlie: 'rgb(239,242,245)',
    sBravo: 'rgba(36,37,38,.7)',
    btnShadow: 'rgba(101, 119, 134, 0.2) 0px 0px 7px, rgba(101, 119, 134, 0.15) 0px 1px 3px 1px'
  },
  dark: {
    alpha: 'rgb(0,0,0)',
    bravo: 'rgb(15,15,15)',
    medium: 'rgb(100,100,100)',
    charlie: 'rgb(239,242,245)',
    sBravo: 'rgba(15,15,15,.7)',
    btnShadow: 'rgba(255, 255, 255, 0.2) 0px 0px 7px, rgba(255, 255, 255, 0.15) 0px 1px 3px 1px'
  }
}

let tColors:any = themeModeColors

// app available modes
export const getThemeModes = () => {
  let obj: any = {}
  for (const mode in tColors) {
    obj[mode] = mode
  }
  return obj
}

export const getThemeModesArray = () => {
  const themeModes = getThemeModes()
  let arr = [];
  for (const name in themeModes) {
    arr.push({
        name,
        colors: tColors[name]
    });
  }
  return arr;
}