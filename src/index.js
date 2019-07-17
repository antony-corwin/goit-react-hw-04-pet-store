import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';
import App from './component/App';

ReactDOM.render(
  <HashRouter basename="/goit-react-hw-04-pet-store">
    <Route component={App} />
  </HashRouter>,
  document.getElementById('root'),
);
