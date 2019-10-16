import companyActionTypes from '../actionTypes';
import companyApiService from '../../apiServices/companyApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import companyRouteLinks from '../../routes/links';

const deleteCompanyBegin = () => ({
  type: companyActionTypes.COMPANY_DELETE_REQUEST,
});

const deleteCompanySuccess = (data) => ({
  type: companyActionTypes.COMPANY_DELETE_SUCCESS,
  payload: data,
});

const deleteCompanyFailure = (error) => ({
  type: companyActionTypes.COMPANY_DELETE_FAILURE,
  payload: { error },
});

const deleteCompany = (param) => async (dispatch) => {
  dispatch(deleteCompanyBegin());
  await companyApiService.deleteCompany(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(deleteCompanySuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(companyRouteLinks.list);
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(deleteCompanyFailure(err));
    });
};

export default deleteCompany;
