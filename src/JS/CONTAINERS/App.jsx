import React, { Component } from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';

import HerosApp from '../CONTAINERS/HerosApp.jsx';
import HerosDecription from '../CONTAINERS/HerosDescription.jsx';

export default class App extends Component {
  render() {
    return (
      <div id="app">
        <Route render={() => {
          window.scrollTo(0, 0);
          return null;
        }} />

        <Switch>
            <Route exact path="/" component={HerosApp} />
            <Route exact path="/BobLennon" component={HerosDecription} />
        </Switch>
      </div>
    );
  }
}
