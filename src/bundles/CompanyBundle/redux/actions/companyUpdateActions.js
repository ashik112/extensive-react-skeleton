import companyActionTypes from '../actionTypes';
import companyApiService from '../../apiServices/companyApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import companyRouteLinks from '../../routes/links';

const updateCompanyBegin = () => ({
  type: companyActionTypes.COMPANY_UPDATE_REQUEST,
});

const updateCompanySuccess = (data) => ({
  type: companyActionTypes.COMPANY_UPDATE_SUCCESS,
  payload: data,
});

const updateCompanyFailure = (error) => ({
  type: companyActionTypes.COMPANY_UPDATE_FAILURE,
  payload: { error },
});

const updateCompany = (id, param) => async (dispatch) => {
  dispatch(updateCompanyBegin());
  await companyApiService.updateCompany(id, param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(updateCompanySuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(companyRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(updateCompanyFailure(err));
    });
};

export default updateCompany;
