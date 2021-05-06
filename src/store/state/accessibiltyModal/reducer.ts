import { SET_ACCESSIBILITY_MODAL } from './action'

export default (state: any, action: any) => {
  const { type, bool } = action;
  //
  switch (type) {
    case SET_ACCESSIBILITY_MODAL:
      return (state = bool);
    default:
      return (state = false);
  }
};
