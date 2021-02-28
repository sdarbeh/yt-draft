import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as ReduxProvider } from 'react-redux'
import ThemeProvider from './utils/Theme/ThemeProvider'
import store from './store'

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

i18next.init({
  interpolation: { escapeValue: false },  // React already does escaping
});

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider>
      <I18nextProvider i18n={i18next}>
        <App />
      </I18nextProvider>
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
