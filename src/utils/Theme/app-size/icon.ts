export const iconSizes: any = {
  smallest: {
    xsmall: "12.8px",
    small: "21.8px",
    normal: "30px",
    large: "31.8px",
    xlarge: "36.8px",
    jumbo: "44.8px",
    xjumbo: "52.8px",
  },
  small: {
    xsmall: "14.4px",
    small: "23.4px",
    normal: "28.4px",
    large: "33.4px",
    xlarge: "38.4px",
    jumbo: "46.4px",
    xjumbo: "54.4px",
  },
  regular: {
    xsmall: "16px",
    small: "25px",
    normal: "30px",
    large: "35px",
    xlarge: "40px",
    jumbo: "48px",
    xjumbo: "56px",
  },
  large: {
    xsmall: "17.6px",
    small: "26.6px",
    normal: "31.6px",
    large: "36.6px",
    xlarge: "41.6px",
    jumbo: "49.6px",
    xjumbo: "57.6px",
  },
  largest: {
    xsmall: "19.2px",
    small: "28.2px",
    normal: "33.2px",
    large: "38.2px",
    xlarge: "43.2px",
    jumbo: "51.2px",
    xjumbo: "59.2px",
  },
};

export const getIconSizesArray = () => {
  let arr = [];
  for (const name in iconSizes) {
    arr.push({ name, sizes: iconSizes[name] });
  }
  return arr;
}