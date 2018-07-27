import { combineReducers } from 'redux'
import Immutable from 'immutable'
import { initialState } from '../index'

export default function(state = initialState.substate, action, fullState = initialState) {

  switch (action.type) {
    case 'ADD_MEMORY_DUMP_BATCH' :

      var newData = Immutable.Map(state).toJS();

      if (newData[action.deviceID]) {
        newData[action.deviceID].raw = newData[action.deviceID].raw.concat(action.MOParray);
      } else {
        newData[action.deviceID] = {
          raw: action.MOParray
        };
      }

      var timesArray = Array.from(newData[action.deviceID].raw, mop => mop.timeStamp);

      var hourBins = calculateHourBins(timesArray);

      newData[action.deviceID].summary = {
        latest: calculateMostRecent(timesArray),
        count: newData[action.deviceID].raw.length,
        mostActiveHour: calculateMostActiveHour(hourBins),
        hourBins: hourBins
      }

      var analyticsDeviceList = Immutable.List(state.analyticsDeviceList).toJS();

      if (analyticsDeviceList.indexOf(action.deviceID) === -1)
        analyticsDeviceList.push(action.deviceID) 


      return Immutable.Map(newData)
              .set('analyticsDeviceList', analyticsDeviceList)
              .set('displayingAnalytics', action.deviceID
              .toString())
              .toJS();

    case 'SELECT_DEVICE_FOR_ANALYTICS' :

      return Immutable.Map(state).set('displayingAnalytics', action.deviceID).toJS()

    default:
      return state
  }
}

const calculateMostRecent = (dateArray) => {
  return Math.max(...dateArray)
}


const calculateHourBins = (allTimes) => {
  var hourCounters = new Array(24).fill(0);

  for (var i in allTimes) {
    var keydate = new Date(allTimes[i])
    var key = keydate.getHours() ;
    hourCounters[key] += 1;
  }

  return hourCounters
}

const calculateMostActiveHour = (hourBins) => {
  return hourBins.indexOf(Math.max(...hourBins))
}



