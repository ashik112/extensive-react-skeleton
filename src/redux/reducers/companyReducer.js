import companyActionsTypes from '../actionTypes/companyActionsTypes';

const initialState = {
  company: {
    name: '',
    id: null,
  },
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case companyActionsTypes.SET:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        company: action.payload,
      };

    case companyActionsTypes.FETCH:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
      };

    case companyActionsTypes.CLEAR:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        company: initialState.company,
      };

    default:
      // ALWAYS have a default case in a reducer
      return state;
  }
}
