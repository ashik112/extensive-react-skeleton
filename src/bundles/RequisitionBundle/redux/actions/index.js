/* eslint-disable no-unused-vars */
import requisitionActionTypes from '../actionTypes';
import alertActions from '../../../../redux/actions/alertActions';
import requisitionApiService from '../../apiServices/requisitionApiService';
import createRequisition from './requisitionCreateActions';
import updateRequisition from './requisitionUpdateActions';
import deleteRequisition from './requisitionDeleteActions';
import checkHttpError from '../../../../services/checkHttpError';

const fetchRequisitionListBegin = () => ({
  type: requisitionActionTypes.REQUISITION_LIST_FETCH_REQUEST,
});

const fetchRequisitionListSuccess = (data) => ({
  type: requisitionActionTypes.REQUISITION_LIST_FETCH_SUCCESS,
  payload: data,
});

const fetchRequisitionListFailure = (error) => ({
  type: requisitionActionTypes.REQUISITION_LIST_FETCH_FAILURE,
  payload: { error },
});

const clearRequisitionStore = () => ({
  type: requisitionActionTypes.CLEAR_ALL,
});

const fetchRequisitionList = () => async (dispatch) => {
  dispatch(fetchRequisitionListBegin());
  await requisitionApiService.getRequisitionList(dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(fetchRequisitionListSuccess(data));
    })
    .catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
      dispatch(fetchRequisitionListFailure(err));
    });
};

const requisitionActions = {
  fetchRequisitionList,
  createRequisition,
  updateRequisition,
  clearRequisitionStore,
  deleteRequisition,
};

export default requisitionActions;
