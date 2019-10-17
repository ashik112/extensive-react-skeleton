/* eslint-disable no-unused-vars */
import departmentActionTypes from '../actionTypes';
import alertActions from '../../../../redux/actions/alertActions';
import departmentApiService from '../../apiServices/departmentApiService';
import createDepartment from './departmentCreateActions';
import updateDepartment from './departmentUpdateActions';
import deleteDepartment from './departmentDeleteActions';
import checkHttpError from '../../../../services/checkHttpError';

const fetchDepartmentListBegin = () => ({
  type: departmentActionTypes.DEPARTMENT_LIST_FETCH_REQUEST,
});

const fetchDepartmentListSuccess = (data) => ({
  type: departmentActionTypes.DEPARTMENT_LIST_FETCH_SUCCESS,
  payload: data,
});

const fetchDepartmentListFailure = (error) => ({
  type: departmentActionTypes.DEPARTMENT_LIST_FETCH_FAILURE,
  payload: { error },
});

const clearDepartmentStore = () => ({
  type: departmentActionTypes.CLEAR_ALL,
});

const fetchDepartmentList = () => async (dispatch) => {
  dispatch(fetchDepartmentListBegin());
  await departmentApiService.getDepartmentList(dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(fetchDepartmentListSuccess(data));
    })
    .catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
      dispatch(fetchDepartmentListFailure(err));
    });
};

const departmentActions = {
  fetchDepartmentList,
  createDepartment,
  updateDepartment,
  clearDepartmentStore,
  deleteDepartment,
};

export default departmentActions;
