import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";   
import './index.css';
import { createStore } from "redux";
import * as serviceWorker from './serviceWorker';

import App from './App';
import reducers from './reducers';


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root')
);


serviceWorker.unregister();
