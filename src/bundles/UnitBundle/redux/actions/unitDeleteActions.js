import unitActionTypes from '../actionTypes';
import unitApiService from '../../apiServices/unitApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import unitRouteLinks from '../../routes/links';

const deleteUnitBegin = () => ({
  type: unitActionTypes.DEPARTMENT_DELETE_REQUEST,
});

const deleteUnitSuccess = (data) => ({
  type: unitActionTypes.DEPARTMENT_DELETE_SUCCESS,
  payload: data,
});

const deleteUnitFailure = (error) => ({
  type: unitActionTypes.DEPARTMENT_DELETE_FAILURE,
  payload: { error },
});

const deleteUnit = (param) => async (dispatch) => {
  dispatch(deleteUnitBegin());
  await unitApiService.deleteUnit(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(deleteUnitSuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(unitRouteLinks.list);
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(deleteUnitFailure(err));
    });
};

export default deleteUnit;
