import notificationActionTypes from '../actionTypes/notificationActionTypes';

const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case notificationActionTypes.SUCCESS:
      return {
        type: 'success',
        title: 'Success',
        body: action.payload,
      };
    case notificationActionTypes.ERROR:
      return {
        type: 'error',
        title: 'Error',
        body: action.payload,
      };
    case notificationActionTypes.CLEAR:
      return {};
    default:
      return state;
  }
};

export default notificationReducer;
