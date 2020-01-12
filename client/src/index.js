import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './serviceWorker';

import {store} from "./store"

const render = ()=> ReactDOM.render(<Router><App /></Router>, document.getElementById("root"));
  render()
  store.subscribe(render);
registerServiceWorker();