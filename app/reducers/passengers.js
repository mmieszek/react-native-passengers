import * as ActionTypes from '../actions/actionTypes'

const initialState = {
  first: null,
  additional: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FIRST_PASSENGER_FETCHED: {
      return {
        ...state,
        first: {
          ...action.payload,
          avatar: Math.floor(Math.random() * 10),
          color: `rgb(${Math.floor(Math.random() * 266)}, ${Math.floor(
            Math.random() * 266,
          )}, ${Math.floor(Math.random() * 266)})`,
        },
      }
    }
    case ActionTypes.SAVE_PASSENGER: {
      return {
        ...state,
        additional: {
          ...state.additional,
          [action.payload.type]: action.payload.passenger,
        },
      }
    }
    default:
      return state
  }
}
