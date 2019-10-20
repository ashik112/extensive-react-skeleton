import unitActionTypes from '../actionTypes';
import unitApiService from '../../apiServices/unitApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import unitRouteLinks from '../../routes/links';

const createUnitBegin = () => ({
  type: unitActionTypes.UNIT_CREATE_REQUEST,
});

const createUnitSuccess = (data) => ({
  type: unitActionTypes.UNIT_CREATE_SUCCESS,
  payload: data,
});

const createUnitFailure = (error) => ({
  type: unitActionTypes.UNIT_CREATE_FAILURE,
  payload: { error },
});

const createUnit = (param) => async (dispatch) => {
  dispatch(createUnitBegin());
  await unitApiService.createUnit(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(createUnitSuccess(data));
      showAlert('success', 'Unit creation successful!', 5);
      history.push(unitRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(createUnitFailure(err));
    });
};

export default createUnit;
