import { rgbToHex } from "@material-ui/core";

/// ------------------------- Converts RGB to RGBA
export const rgbToRgba = (rgb: string, opacity: number) => {
  const match = rgb.match(
    /rgba?\((\d{1,3}), ?(\d{1,3}), ?(\d{1,3})\)?(?:, ?(\d(?:\.\d?))\))?/
  );

  const color = match
    ? {
        red: match[1],
        green: match[2],
        blue: match[3],
      }
    : {};

  return `rgba(${color.red}, ${color.green}, ${color.blue}, ${opacity})`;
};

export const getAppColorCSS = (theme: any, color?: string) => {
  if (color) {
    if (theme[color]) {
      return theme[color]
    } else if (theme.globalColors[color]) {
      return theme.globalColors[color]
    }
  }
  return theme.primary
}

interface CalcPixels {
  size: string
  operator: '+' | '-' | 'x' | '/'
  constant: number
  returnNumber?: boolean
}

export const calcPixels = ({ size, operator, constant, returnNumber }: CalcPixels) => {
  const x = parseInt(size.substring(0, size.length - 2))
  let solved;

  switch (operator) {
    case '+':
      solved = x + constant
      break 
    case '-':
      solved = x - constant
      break
    case '/':
      solved = x / constant
      break
    case 'x':
      solved = x * constant
      break
  }

  return returnNumber ? solved : `${solved}px`
}

export const shadeColor = (color: any, amount: any) => {
  color = rgbToHex(color)

  let usePound = false;

  if (color[0] === "#") {
    color = color.slice(1);
    usePound = true;
  }

  const num = parseInt(color,16);

  let r = (num >> 16) + amount;

  if (r > 255) r = 255;
  else if  (r < 0) r = 0;

  let b = ((num >> 8) & 0x00FF) + amount;

  if (b > 255) b = 255;
  else if  (b < 0) b = 0;

  let g = (num & 0x0000FF) + amount;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound?"#":"") + (g | (b << 8) | (r << 16)).toString(16);
}