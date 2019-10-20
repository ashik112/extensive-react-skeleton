import locationActionTypes from './actionTypes';

const initialState = {
  loading: false,
  list: [],
  location: {},
  error: null,
};

export default function locationReducer(state = initialState, action) {
  switch (action.type) {
    case locationActionTypes.LOCATION_LIST_FETCH_REQUEST:
      return {
        loading: true,
        error: null,
        list: [],
      };
    case locationActionTypes.LOCATION_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case locationActionTypes.LOCATION_LIST_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case locationActionTypes.LOCATION_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case locationActionTypes.LOCATION_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case locationActionTypes.LOCATION_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case locationActionTypes.LOCATION_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case locationActionTypes.LOCATION_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case locationActionTypes.LOCATION_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case locationActionTypes.LOCATION_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case locationActionTypes.LOCATION_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case locationActionTypes.LOCATION_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case locationActionTypes.CLEAR_ALL:
      return {
        loading: false,
        list: [],
        location: {},
        error: null,
      };
    default:
      return state;
  }
}
