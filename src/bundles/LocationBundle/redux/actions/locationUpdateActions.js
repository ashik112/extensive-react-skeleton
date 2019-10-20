import locationActionTypes from '../actionTypes';
import locationApiService from '../../apiServices/locationApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import locationRouteLinks from '../../routes/links';

const updateLocationBegin = () => ({
  type: locationActionTypes.LOCATION_UPDATE_REQUEST,
});

const updateLocationSuccess = (data) => ({
  type: locationActionTypes.LOCATION_UPDATE_SUCCESS,
  payload: data,
});

const updateLocationFailure = (error) => ({
  type: locationActionTypes.LOCATION_UPDATE_FAILURE,
  payload: { error },
});

const updateLocation = (id, param) => async (dispatch) => {
  dispatch(updateLocationBegin());
  await locationApiService.updateLocation(id, param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(updateLocationSuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(locationRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(updateLocationFailure(err));
    });
};

export default updateLocation;
