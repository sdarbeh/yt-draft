import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store";

import { setFontSize } from "../../store/actions/fontSizeAction";

import { defaultFontSize, fontSizes, getfontSizesArray } from '../../utils/Theme/fontSizes'

export default () => {
  const fontSizeState: any = useSelector((state: RootState) => state.fontSize);
  const dispatch = useDispatch();

  const getFontSizes = () => {
    const f = getfontSizesArray().find((f:any) => f.name === fontSizeState)
    if (f) {
      return f.fontSize
    }
    return fontSizes[defaultFontSize]
  };

  return {
    currentFontSize: fontSizeState,
    fontSize: getFontSizes(),
    fontSizeArray: getfontSizesArray(),
    setFontSize: (size: string) => dispatch(setFontSize(size))
  };
};
