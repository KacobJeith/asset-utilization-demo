import { combineReducers } from 'redux'
import Immutable from 'immutable'
import 'babel-polyfill'
import { initialState } from '../index'
import * as actions from './actions'
import * as async from './async'

import reducersAnalytics from './reducers_analytics'

export default function(state = initialState, action) {
  switch (action.type) {
    case 'LOGIN' :

      import(/* webpackChunkName: "firebaseAuth" */ '../firebase/FirebaseAuth').then((auth) => auth.handleLogin());

      return state

    case 'LOGOUT':

      import(/* webpackChunkName: "firebaseAuth" */ '../firebase/FirebaseAuth').then((auth) => auth.logout());

      return initialState

    case 'LOGIN_STATUS' :

      return Immutable.Map(state).set('loginStatus', action.status).toJS()

    case 'LOAD_PROVIDER' :

      var newState = Immutable.Map(state.providers).set(action.provider.providerId, action.provider).toJS();

      return Immutable.Map(state).set('providers', newState).toJS()

    case 'LOGIN_TO_FIREBASE' : 

      import(/* webpackChunkName: "firebaseAuth" */ '../firebase/FirebaseAuth').then((auth) => auth.firebaseAuthUI());

      return state

    case 'LOGOUT_OF_FIREBASE' :

      import(/* webpackChunkName: "firebaseAuth" */ '../firebase/FirebaseAuth').then((auth) => auth.logout());

      return state

    case 'ADD_USER': 

      return Immutable.Map(state).set('user', action.user).toJS();

    case 'UNLINK_PROVIDER' :

      var newState = Immutable.Map(state.providers).delete(action.providerId).toJS();

      return Immutable.Map(state).set('providers', newState).toJS()

    case 'ADD_DEVICE' :

      var newState = Immutable.Map(state.devices).set(action.deviceID, action.device).toJS();

      return Immutable.Map(state).set('devices', newState).toJS()

    case 'ADD_PLACE' :

      var newState = Immutable.Map(state.places).set(action.placeID, action.place).toJS();

      return Immutable.Map(state).set('places', newState).toJS()

    case 'ADD_GROUP' :

      var newState = Immutable.Map(state.groups).set(action.groupID, action.group).toJS();

      return Immutable.Map(state).set('groups', newState).toJS()

    case 'SAVE_NEW_PLACE' :

      import(/* webpackChunkName: "firebaseDatabase" */ '../firebase/FirebaseDatabase').then((database) => database.saveNewPlace(action.placeName, action.placeSSID, action.placeSSIDPassword));

      return state

    case 'DELETE_PLACE_FROM_FIREBASE' :

      import(/* webpackChunkName: "firebaseDatabase" */ '../firebase/FirebaseDatabase').then((database) => database.deletePlace(action.placeID));

      return state

    case 'DELETE_PLACE':

      var newState = Immutable.Map(state.places).delete(action.placeID).toJS();

      return Immutable.Map(state).set('places', newState).toJS()

    case 'SUBMIT_CONTACT_FORM':

      async.submitContactForm(action.name, action.company, action.email, action.message);

      return state;

    default:
      
  }

  const analyticsStartingState = Immutable.Map(state.analytics).toJS();
  const analyticsState = reducersAnalytics(analyticsStartingState, action, state);

  if (analyticsState !== analyticsStartingState) {
    return  Immutable.Map(state).set('analytics', analyticsState).toJS()
  }

  return state
}
