import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
//import App from './App'
import { Provider } from 'react-redux';
import { compose, createStore } from 'redux';
import './SCSS/main.css';
import './FONTS/font-awesome-4.7.0/css/font-awesome.min.css';
import registerServiceWorker from './registerServiceWorker';
import D4ddyPaul from './JS/CONTAINERS/App.jsx';
import reducers from './JS/REDUCERS';

const store = createStore(
  reducers
);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <D4ddyPaul />
    </Router>
  </Provider>, document.getElementById('root'));
registerServiceWorker();
