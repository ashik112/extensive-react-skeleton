import supplierActionTypes from './actionTypes';

const initialState = {
  loading: false,
  list: [],
  supplier: {},
  error: null,
};

export default function supplierReducer(state = initialState, action) {
  switch (action.type) {
    case supplierActionTypes.SUPPLIER_LIST_FETCH_REQUEST:
      return {
        loading: true,
        error: null,
        list: [],
      };
    case supplierActionTypes.SUPPLIER_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case supplierActionTypes.SUPPLIER_LIST_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case supplierActionTypes.SUPPLIER_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case supplierActionTypes.SUPPLIER_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case supplierActionTypes.SUPPLIER_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case supplierActionTypes.SUPPLIER_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case supplierActionTypes.SUPPLIER_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case supplierActionTypes.SUPPLIER_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case supplierActionTypes.SUPPLIER_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case supplierActionTypes.SUPPLIER_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case supplierActionTypes.SUPPLIER_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case supplierActionTypes.CLEAR_ALL:
      return {
        loading: false,
        list: [],
        supplier: {},
        error: null,
      };
    default:
      return state;
  }
}
