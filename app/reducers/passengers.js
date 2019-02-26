import * as ActionTypes from '../actions/actionTypes'

const initialState = {
  // All travellers stores as a map with keys being traveller type
  // first => main traveller
  all: {},

  // Make trip configuration dynamic as this data comes from
  // previous screen not in the scope of this technical test.
  configuration: [
    { type: 'adult2', label: 'Adult 2' },
    { type: 'adult3', label: 'Adult 3' },
    { type: 'child1', label: 'Child 1' },
    { type: 'child2', label: 'Child 2' },
    { type: 'child3', label: 'Child 3' },
    { type: 'child4', label: 'Child 4' },
    { type: 'child5', label: 'Child 5' },
  ],

  // Form validation. Kept in the store to have header Done button visibility controllerd.
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
