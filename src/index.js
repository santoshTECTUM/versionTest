import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import GlobalStore from './components/ReduxComponnet/reduxStore';
// import store from './components/ReduxComponnet/reduxStore';

ReactDOM.render(
  <Provider store={GlobalStore}>
  <App />
  </Provider>,
  document.getElementById('root')
);
