import locationActionTypes from '../actionTypes';
import locationApiService from '../../apiServices/locationApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import locationRouteLinks from '../../routes/links';

const createLocationBegin = () => ({
  type: locationActionTypes.LOCATION_CREATE_REQUEST,
});

const createLocationSuccess = (data) => ({
  type: locationActionTypes.LOCATION_CREATE_SUCCESS,
  payload: data,
});

const createLocationFailure = (error) => ({
  type: locationActionTypes.LOCATION_CREATE_FAILURE,
  payload: { error },
});

const createLocation = (param) => async (dispatch) => {
  dispatch(createLocationBegin());
  await locationApiService.createLocation(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(createLocationSuccess(data));
      showAlert('success', 'Location creation successful!', 5);
      history.push(locationRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(createLocationFailure(err));
    });
};

export default createLocation;
