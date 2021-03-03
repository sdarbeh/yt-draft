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