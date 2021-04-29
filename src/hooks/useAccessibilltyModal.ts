import { useSelector, useDispatch } from "react-redux";
import { RootState } from "store";
import { setAccessibilityModal } from "store/actions/accessibilityModalAction";

export default () => {
  const accessibilityModal: any = useSelector((state: RootState) => state.accessibilityModal);
  const dispatch = useDispatch();

  return {
    accessibilityModalActive: accessibilityModal,
    setAccessibilityModal: (bool: boolean) => dispatch(setAccessibilityModal(bool))
  };
}