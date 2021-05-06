import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";

import { setAppSize } from "store/app/theme/action";

import { fontSizes, getFontsArray } from 'utils/theme/app-size/font'
import { iconSizes, getIconSizesArray } from 'utils/theme/app-size/icon'

const Font = () => {
  const { size }: any = useSelector((state: RootState) => state.app_theme);
  const dispatch = useDispatch();

  const getAppSizes = () => {
    const f =  fontSizes[size]
    const i = iconSizes[size]
    return {
      fonts: f ? f :  fontSizes.normal,
      icons: i ? i : iconSizes.normal,
    }
  };

  return {
    appSize: size,
    icon: getAppSizes().icons,
    iconArray: getIconSizesArray(),
    iconSizes,
    font: getAppSizes().fonts,
    fontArray: getFontsArray(),
    fontSizes,
    setAppSize: (size: string) => dispatch(setAppSize(size))
  };
};

export default Font