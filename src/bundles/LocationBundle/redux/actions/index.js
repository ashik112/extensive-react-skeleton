/* eslint-disable no-unused-vars */
import locationActionTypes from '../actionTypes';
import alertActions from '../../../../redux/actions/alertActions';
import locationApiService from '../../apiServices/locationApiService';
import createLocation from './locationCreateActions';
import updateLocation from './locationUpdateActions';
import deleteLocation from './locationDeleteActions';
import checkHttpError from '../../../../services/checkHttpError';

const fetchLocationListBegin = () => ({
  type: locationActionTypes.LOCATION_LIST_FETCH_REQUEST,
});

const fetchLocationListSuccess = (data) => ({
  type: locationActionTypes.LOCATION_LIST_FETCH_SUCCESS,
  payload: data,
});

const fetchLocationListFailure = (error) => ({
  type: locationActionTypes.LOCATION_LIST_FETCH_FAILURE,
  payload: { error },
});

const clearLocationStore = () => ({
  type: locationActionTypes.CLEAR_ALL,
});

const fetchLocationList = () => async (dispatch) => {
  dispatch(fetchLocationListBegin());
  await locationApiService.getLocationList(dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(fetchLocationListSuccess(data));
    })
    .catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
      dispatch(fetchLocationListFailure(err));
    });
};

const locationActions = {
  fetchLocationList,
  createLocation,
  updateLocation,
  clearLocationStore,
  deleteLocation,
};

export default locationActions;
