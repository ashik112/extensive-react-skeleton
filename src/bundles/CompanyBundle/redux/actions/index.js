/* eslint-disable no-unused-vars */
import companyActionTypes from '../actionTypes';
import alertActions from '../../../../redux/actions/alertActions';
import companyApiService from '../../apiServices/companyApiService';
import createCompany from './companyCreateActions';
import updateCompany from './companyUpdateActions';
import deleteCompany from './companyDeleteActions';
import checkHttpError from '../../../../services/checkHttpError';

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
      checkHttpError(err, 1, 5, dispatch);
      dispatch(fetchCompanyListFailure(err));
    });
};

const companyActions = {
  fetchCompanyList,
  createCompany,
  updateCompany,
  clearStore,
  deleteCompany,
};

export default companyActions;
