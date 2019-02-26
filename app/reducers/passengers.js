import * as ActionTypes from '../actions/actionTypes'

const initialState = {
  all: {},
  configuration: [
    { type: 'adult2', label: 'Adult 2' },
    { type: 'adult3', label: 'Adult 3' },
    { type: 'child1', label: 'Child 1' },
    { type: 'child2', label: 'Adult 2' },
    { type: 'child3', label: 'Adult 3' },
    { type: 'child4', label: 'Child 4' },
    { type: 'child5', label: 'Child 5' },
  ],
  formValid: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.SAVE_PASSENGER: {
      const { type, passenger, color, avatar } = action.payload
      return {
        ...state,
        all: {
          ...state.all,
          [type]: {
            ...passenger,
            color,
            avatar,
          },
        },
      }
    }
    case ActionTypes.SET_FORM_VALID:
      return {
        ...state,
        formValid: action.payload,
      }
    default:
      return state
  }
}
