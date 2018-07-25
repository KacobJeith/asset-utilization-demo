import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from 'reducers/reducers'
import App from './components/App'
import thunk from 'redux-thunk'
import WebFont from 'webfontloader'
import * as GoogleAnalytics from './GoogleAnalytics'

import { composeWithDevTools } from 'redux-devtools-extension';

import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "./creativetim/assets/css/material-dashboard-react.css";

import indexRoutes from "routes/index.jsx";

const hist = createBrowserHistory();

 WebFont.load({
   google: {
     families: ['Fjalla One', 'Oswald']
   },
 });

require('./service-worker-registration.js');
GoogleAnalytics.initialize();

const startState = {
  scrollPosition: 0,
  loginStatus: false,
  providers: {},
  analytics: {
    analyticsDeviceList: [],
    displayingAnalytics: null
  },
  devices: {},
  places: {},
  groups: {},
  files: {},
  user: null
}

export const initialState = startState;
export const store = createStore(reducers, startState, composeWithDevTools(applyMiddleware(thunk)));


render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        {indexRoutes.map((prop, key) => {
          return <Route path={prop.path} component={prop.component} key={key} />;
        })}
      </Switch>
    </Router>
  </Provider>,

  document.getElementById('root')
);

import(/* webpackChunkName: "firebaseAuth" */ './firebase/FirebaseAuth').then((auth) => auth.initializeFirebase());


