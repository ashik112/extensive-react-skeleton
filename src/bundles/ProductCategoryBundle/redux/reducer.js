import productCategoryActionTypes from './actionTypes';

const initialState = {
  loading: false,
  list: [],
  productCategory: {},
  error: null,
};

export default function productCategoryReducer(state = initialState, action) {
  switch (action.type) {
    case productCategoryActionTypes.PRODUCT_CATEGORY_LIST_FETCH_REQUEST:
      return {
        loading: true,
        error: null,
        list: [],
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_LIST_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_CREATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_CREATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_CREATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_UPDATE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_UPDATE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_UPDATE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_DELETE_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_DELETE_SUCCESS:
      return {
        ...state,
        loading: false,
      };
    case productCategoryActionTypes.PRODUCT_CATEGORY_DELETE_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case productCategoryActionTypes.CLEAR_ALL:
      return {
        loading: false,
        list: [],
        productCategory: {},
        error: null,
      };
    default:
      return state;
  }
}
