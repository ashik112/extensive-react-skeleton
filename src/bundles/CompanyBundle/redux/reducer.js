import companyActionTypes from './actionTypes';

const initialState = {
  loading: false,
  list: [],
  company: {},
  error: null,
};

export default function companyReducer(state = initialState, action) {
  switch (action.type) {
    case companyActionTypes.COMPANY_LIST_FETCH_REQUEST:
      return {
        loading: true,
        error: null,
        list: [],
      };
    case companyActionTypes.COMPANY_LIST_FETCH_SUCCESS:
      return {
        ...state,
        loading: false,
        list: action.payload,
      };
    case companyActionTypes.COMPANY_LIST_FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        list: [],
        error: action.payload,
      };
    case companyActionTypes.CLEAR_ALL:
      return {
        loading: false,
        list: [],
        company: {},
        error: null,
      };
    default:
      return state;
  }
}
