import departmentActionTypes from '../actionTypes';
import departmentApiService from '../../apiServices/departmentApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import departmentRouteLinks from '../../routes/links';

const createDepartmentBegin = () => ({
  type: departmentActionTypes.DEPARTMENT_CREATE_REQUEST,
});

const createDepartmentSuccess = (data) => ({
  type: departmentActionTypes.DEPARTMENT_CREATE_SUCCESS,
  payload: data,
});

const createDepartmentFailure = (error) => ({
  type: departmentActionTypes.DEPARTMENT_CREATE_FAILURE,
  payload: { error },
});

const createDepartment = (param) => async (dispatch) => {
  dispatch(createDepartmentBegin());
  await departmentApiService.createDepartment(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(createDepartmentSuccess(data));
      showAlert('success', 'Department creation successful!', 5);
      history.push(departmentRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(createDepartmentFailure(err));
    });
};

export default createDepartment;
