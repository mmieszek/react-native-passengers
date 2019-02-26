import { Alert } from 'react-native'
import * as ActionTypes from './actionTypes'

export function savePassenger(type, passenger) {
  const avatar = passenger.avatar || Math.floor(Math.random() * 10)
  const color =
    passenger.color ||
    `rgb(${Math.floor(Math.random() * 266)}, ${Math.floor(
      Math.random() * 266,
    )}, ${Math.floor(Math.random() * 266)})`
  return {
    type: ActionTypes.SAVE_PASSENGER,
    payload: { type, passenger, avatar, color },
  }
}
export function setFormValid(isValid) {
  return {
    type: ActionTypes.SET_FORM_VALID,
    payload: isValid,
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
      dispatch(savePassenger('first', firstPassenger))
      dispatch(fetchEnded())
    } catch (error) {
      Alert.alert('Alert while fetching first passenger', error.message)
    }
  }
}
