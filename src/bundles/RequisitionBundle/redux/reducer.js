import requisitionActionTypes from './actionTypes';

const initialState = {
  loading: false,
  list: [],
  requisition: {},
  error: null,
};

export default function requisitionReducer(state = initialState, action) {
  switch (action.type) {
    case requisitionActionTypes.REQUISITION_LIST_FETCH_REQUEST:
      return {
        loading: true,
        error: null,
        list: [],
      };
    case requisitionActionTypes.REQUISITION_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case requisitionActionTypes.REQUISITION_LIST_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case requisitionActionTypes.REQUISITION_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case requisitionActionTypes.REQUISITION_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case requisitionActionTypes.REQUISITION_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case requisitionActionTypes.REQUISITION_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case requisitionActionTypes.REQUISITION_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case requisitionActionTypes.REQUISITION_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case requisitionActionTypes.REQUISITION_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case requisitionActionTypes.REQUISITION_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case requisitionActionTypes.REQUISITION_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case requisitionActionTypes.CLEAR_ALL:
      return {
        loading: false,
        list: [],
        requisition: {},
        error: null,
      };
    default:
      return state;
  }
}
