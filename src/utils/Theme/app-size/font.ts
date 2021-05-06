export const fontSizes: any = {
  smallest: {
    xsmall: "9.6px",
    small: "11.2px",
    normal: "12.8px",
    large: "14.4px",
    xlarge: "16px",
    jumbo: "24px",
    xjumbo: "32px",
    xxjumbo: "48px",
  },
  small: {
    xsmall: "11.2px",
    small: "12.8px",
    normal: "14.4px",
    large: "16px",
    xlarge: "17.6px",
    jumbo: "25.6px",
    xjumbo: "33.6px",
    xxjumbo: "49.6px",
  },
  regular: {
    xsmall: "12.8px",
    small: "14.4px",
    normal: "16px",
    large: "17.6px",
    xlarge: "19.2px",
    jumbo: "27.2px",
    xjumbo: "35.2px",
    xxjumbo: "51.2px",
  },
  large: {
    xsmall: "14.4px",
    small: "16px",
    normal: "17.6px",
    large: "19.2px",
    xlarge: "20.8px",
    jumbo: "28.8px",
    xjumbo: "36.8px",
    xxjumbo: "52.8px",
  },
  largest: {
    xsmall: "16px",
    small: "17.6px",
    normal: "19.2px",
    large: "20.8px",
    xlarge: "22.4px",
    jumbo: "30.4px",
    xjumbo: "38.4px",
    xxjumbo: "54.4px",
  },
};

export const getFontsArray = () => {
  let arr = [];
  for (const name in fontSizes) {
    arr.push({ name, sizes: fontSizes[name] });
  }
  return arr;
};
