import companyActionTypes from '../actionTypes';
import companyApiService from '../../apiServices/companyApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import companyRouteLinks from '../../routes/links';

const createCompanyBegin = () => ({
  type: companyActionTypes.COMPANY_CREATE_REQUEST,
});

const createCompanySuccess = (data) => ({
  type: companyActionTypes.COMPANY_CREATE_SUCCESS,
  payload: data,
});

const createCompanyFailure = (error) => ({
  type: companyActionTypes.COMPANY_CREATE_FAILURE,
  payload: { error },
});

const createCompany = (param) => async (dispatch) => {
  dispatch(createCompanyBegin());
  await companyApiService.createCompany(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(createCompanySuccess(data));
      showAlert('success', 'Company creation successful!', 5);
      history.push(companyRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(createCompanyFailure(err));
    });
};

export default createCompany;
