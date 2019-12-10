import alertActionTypes from './alertActionTypes';

const alertReducer = (state = {}, action) => {
  switch (action.type) {
    case alertActionTypes.SUCCESS:
      return {
        type: 'success',
        title: 'Success',
        body: action.payload,
      };
    case alertActionTypes.ERROR:
      return {
        type: 'error',
        title: 'Error',
        body: action.payload,
      };
    case alertActionTypes.CLEAR:
      return {};
    default:
      return state;
  }
};

export default alertReducer;
