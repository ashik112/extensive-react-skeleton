import departmentActionTypes from './actionTypes';

const initialState = {
  loading: false,
  list: [],
  department: {},
  error: null,
};

export default function departmentReducer(state = initialState, action) {
  switch (action.type) {
    case departmentActionTypes.DEPARTMENT_LIST_FETCH_REQUEST:
      return {
        loading: true,
        error: null,
        list: [],
      };
    case departmentActionTypes.DEPARTMENT_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case departmentActionTypes.DEPARTMENT_LIST_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case departmentActionTypes.DEPARTMENT_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case departmentActionTypes.DEPARTMENT_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case departmentActionTypes.DEPARTMENT_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case departmentActionTypes.DEPARTMENT_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case departmentActionTypes.DEPARTMENT_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case departmentActionTypes.DEPARTMENT_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case departmentActionTypes.DEPARTMENT_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case departmentActionTypes.DEPARTMENT_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case departmentActionTypes.DEPARTMENT_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case departmentActionTypes.CLEAR_ALL:
      return {
        loading: false,
        list: [],
        department: {},
        error: null,
      };
    default:
      return state;
  }
}
