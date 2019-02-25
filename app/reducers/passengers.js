import * as ActionTypes from '../actions/actionTypes'

const initialState = {
  first: null,
  additional: [],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FIRST_PASSENGER_FETCHED: {
      return {
        ...state,
        first: action.payload,
      }
    }
    default:
      return state
  }
}
