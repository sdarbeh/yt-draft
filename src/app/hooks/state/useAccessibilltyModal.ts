import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { setAccessibilityModal } from "store/state/accessibiltyModal/action";

export default () => {
  const accessibilityModal: any = useSelector((state: RootState) => state.accessibility_modal);
  const dispatch = useDispatch();

  return {
    accessibilityModalActive: accessibilityModal,
    setAccessibilityModal: (bool: boolean) => dispatch(setAccessibilityModal(bool))
  };
}