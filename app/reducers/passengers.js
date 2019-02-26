import * as ActionTypes from '../actions/actionTypes'

const initialState = {
  first: null,
  additional: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_PASSENGER: {
      const { type, passenger, color, avatar } = action.payload
      return {
        ...state,
        [type]: {
          ...passenger,
          color,
          avatar,
        },
      }
    }
    default:
      return state
  }
}
