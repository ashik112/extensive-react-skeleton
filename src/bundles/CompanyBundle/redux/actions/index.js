/* eslint-disable no-unused-vars */
import companyActionTypes from '../actionTypes';
import alertActions from '../../../../redux/actions/alertActions';
import companyApiService from '../../apiServices/companyApiService';
import createCompany from './companyCreateActions';
import updateCompany from './companyUpdateActions';

const fetchCompanyListBegin = () => ({
  type: companyActionTypes.COMPANY_LIST_FETCH_REQUEST,
});

const fetchCompanyListSuccess = (data) => ({
  type: companyActionTypes.COMPANY_LIST_FETCH_SUCCESS,
  payload: data,
});

const fetchCompanyListFailure = (error) => ({
  type: companyActionTypes.COMPANY_LIST_FETCH_FAILURE,
  payload: { error },
});

const clearStore = () => ({
  type: companyActionTypes.CLEAR_ALL,
});

const fetchCompanyList = () => async (dispatch) => {
  dispatch(fetchCompanyListBegin());
  await companyApiService.getCompanyList(dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(fetchCompanyListSuccess(data));
    })
    .catch((err) => {
      try {
        if (err.response && err.response.statusText) {
          dispatch(alertActions.error(err.response.statusText));
        } else if (err.response.message) {
          dispatch(alertActions.error(err.response.message));
        } else {
          dispatch(alertActions.error('Unexpected Error'));
        }
      } catch (e) {
        dispatch(alertActions.error('Unexpected Error'));
      }
      dispatch(fetchCompanyListFailure(err));
    });
};

const companyActions = {
  fetchCompanyList,
  createCompany,
  updateCompany,
  clearStore,
};

export default companyActions;
