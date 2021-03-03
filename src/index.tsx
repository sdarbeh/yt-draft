import React from 'react';
import ReactDOM from 'react-dom';

import { Provider as ReduxProvider } from 'react-redux'
import ThemeProvider from './utils/Theme/ThemeProvider'
import store from './store'

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <ReduxProvider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ReduxProvider>,
  document.getElementById('root')
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
