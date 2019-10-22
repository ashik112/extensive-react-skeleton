import requisitionActionTypes from '../actionTypes';
import requisitionApiService from '../../apiServices/requisitionApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import requisitionRouteLinks from '../../routes/links';

const updateRequisitionBegin = () => ({
  type: requisitionActionTypes.REQUISITION_UPDATE_REQUEST,
});

const updateRequisitionSuccess = (data) => ({
  type: requisitionActionTypes.REQUISITION_UPDATE_SUCCESS,
  payload: data,
});

const updateRequisitionFailure = (error) => ({
  type: requisitionActionTypes.REQUISITION_UPDATE_FAILURE,
  payload: { error },
});

const updateRequisition = (id, param) => async (dispatch) => {
  dispatch(updateRequisitionBegin());
  await requisitionApiService.updateRequisition(id, param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(updateRequisitionSuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(requisitionRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(updateRequisitionFailure(err));
    });
};

export default updateRequisition;
