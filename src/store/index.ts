import { createStore, combineReducers, compose } from "redux";
import { app_theme } from './app'
import { accessibility_modal } from './state'

const rootReducer = combineReducers({
  app_theme,
  accessibility_modal
});

export type RootState = ReturnType<typeof rootReducer>;

export default createStore(
  rootReducer,
  compose(
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);
