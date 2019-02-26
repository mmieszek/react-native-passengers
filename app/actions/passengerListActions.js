import { Alert } from 'react-native'
import * as ActionTypes from './actionTypes'

export function savePassenger(type, passenger) {
  return {
    type: ActionTypes.SAVE_PASSENGER,
    payload: { type, passenger },
  }
}
export function firstPassengerFetched(firstPassenger) {
  return {
    type: ActionTypes.FIRST_PASSENGER_FETCHED,
    payload: firstPassenger,
  }
}

export function fetchStarted() {
  return {
    type: ActionTypes.FETCH_STARTED,
  }
}

export function fetchEnded() {
  return {
    type: ActionTypes.FETCH_ENDED,
  }
}

export function fetchFirstPassenger() {
  // eslint-disable-next-line consistent-return
  return async dispatch => {
    dispatch(fetchStarted())
    try {
      const response = await fetch(
        'https://functionapp20180527095701.azurewebsites.net/api/GetUserTravellerInfo',
      )
      const firstPassenger = await response.json()
      dispatch(firstPassengerFetched(firstPassenger))
      dispatch(fetchEnded())
    } catch (error) {
      Alert.alert('Alert while fetching first passenger', error.message)
    }
  }
}
