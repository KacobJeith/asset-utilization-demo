import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reducers from './redux/reducers'
import App from './components/App'
import thunk from 'redux-thunk'
import * as shopify from './shopify/Shopify'
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
  shopify: {},
  scrollPosition: 0,
  webGLStatus: false,
  loginStatus: false,
  checkoutID: null,
  itemsInCart: 0,
  shoppingCart: {
    lineItems:[]
  },
  cartContext:{},
  providers: {},
  devices: {},
  places: {},
  groups: {},
  signals: {},
  files: {},
  collections: {},
  svgText: 'starting',
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
// shopify.InitializeShopify();


