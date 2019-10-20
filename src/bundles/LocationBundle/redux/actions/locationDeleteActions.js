import locationActionTypes from '../actionTypes';
import locationApiService from '../../apiServices/locationApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import locationRouteLinks from '../../routes/links';

const deleteLocationBegin = () => ({
  type: locationActionTypes.LOCATION_DELETE_REQUEST,
});

const deleteLocationSuccess = (data) => ({
  type: locationActionTypes.LOCATION_DELETE_SUCCESS,
  payload: data,
});

const deleteLocationFailure = (error) => ({
  type: locationActionTypes.LOCATION_DELETE_FAILURE,
  payload: { error },
});

const deleteLocation = (param) => async (dispatch) => {
  dispatch(deleteLocationBegin());
  await locationApiService.deleteLocation(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(deleteLocationSuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(locationRouteLinks.list);
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(deleteLocationFailure(err));
    });
};

export default deleteLocation;
