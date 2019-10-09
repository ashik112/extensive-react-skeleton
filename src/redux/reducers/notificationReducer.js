import notificationActionTypes from '../actionTypes/notificationActionTypes';

const notificationReducer = (state = {}, action) => {
  switch (action.type) {
    case notificationActionTypes.SUCCESS:
      return {
        type: 'success',
        title: action.payload.title,
        body: action.payload.message,
      };
    case notificationActionTypes.WARNING:
      return {
        type: 'warning',
        title: action.payload.title,
        body: action.payload.message,
      };
    case notificationActionTypes.ERROR:
      return {
        type: 'error',
        title: action.payload.title,
        body: action.payload.message,
      };
    case notificationActionTypes.CLEAR:
      return {};
    default:
      return state;
  }
};

export default notificationReducer;
