import unitActionTypes from './actionTypes';

const initialState = {
  loading: false,
  list: [],
  unit: {},
  error: null,
};

export default function unitReducer(state = initialState, action) {
  switch (action.type) {
    case unitActionTypes.UNIT_LIST_FETCH_REQUEST:
      return {
        loading: true,
        error: null,
        list: [],
      };
    case unitActionTypes.UNIT_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case unitActionTypes.UNIT_LIST_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case unitActionTypes.UNIT_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case unitActionTypes.UNIT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case unitActionTypes.UNIT_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case unitActionTypes.UNIT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case unitActionTypes.UNIT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case unitActionTypes.UNIT_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case unitActionTypes.UNIT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case unitActionTypes.UNIT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case unitActionTypes.UNIT_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case unitActionTypes.CLEAR_ALL:
      return {
        loading: false,
        list: [],
        unit: {},
        error: null,
      };
    default:
      return state;
  }
}
