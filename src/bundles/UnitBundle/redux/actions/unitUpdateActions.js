import unitActionTypes from '../actionTypes';
import unitApiService from '../../apiServices/unitApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import unitRouteLinks from '../../routes/links';

const updateUnitBegin = () => ({
  type: unitActionTypes.UNIT_UPDATE_REQUEST,
});

const updateUnitSuccess = (data) => ({
  type: unitActionTypes.UNIT_UPDATE_SUCCESS,
  payload: data,
});

const updateUnitFailure = (error) => ({
  type: unitActionTypes.UNIT_UPDATE_FAILURE,
  payload: { error },
});

const updateUnit = (id, param) => async (dispatch) => {
  dispatch(updateUnitBegin());
  await unitApiService.updateUnit(id, param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(updateUnitSuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(unitRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(updateUnitFailure(err));
    });
};

export default updateUnit;
