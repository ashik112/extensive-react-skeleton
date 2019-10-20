/* eslint-disable no-unused-vars */
import unitActionTypes from '../actionTypes';
import alertActions from '../../../../redux/actions/alertActions';
import unitApiService from '../../apiServices/unitApiService';
import createUnit from './unitCreateActions';
import updateUnit from './unitUpdateActions';
import deleteUnit from './unitDeleteActions';
import checkHttpError from '../../../../services/checkHttpError';

const fetchUnitListBegin = () => ({
  type: unitActionTypes.UNIT_LIST_FETCH_REQUEST,
});

const fetchUnitListSuccess = (data) => ({
  type: unitActionTypes.UNIT_LIST_FETCH_SUCCESS,
  payload: data,
});

const fetchUnitListFailure = (error) => ({
  type: unitActionTypes.UNIT_LIST_FETCH_FAILURE,
  payload: { error },
});

const clearUnitStore = () => ({
  type: unitActionTypes.CLEAR_ALL,
});

const fetchUnitList = () => async (dispatch) => {
  dispatch(fetchUnitListBegin());
  await unitApiService.getUnitList(dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(fetchUnitListSuccess(data));
    })
    .catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
      dispatch(fetchUnitListFailure(err));
    });
};

const unitActions = {
  fetchUnitList,
  createUnit,
  updateUnit,
  clearUnitStore,
  deleteUnit,
};

export default unitActions;
