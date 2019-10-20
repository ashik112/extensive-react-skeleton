import productCategoryActionTypes from '../actionTypes';
import productCategoryApiService from '../../apiServices/productCategoryApiService';
import checkHttpError from '../../../../services/checkHttpError';
import { showAlert } from '../../../../services/generalhelper';
import history from '../../../../services/history';
import productCategoryRouteLinks from '../../routes/links';

const createProductCategoryBegin = () => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_CREATE_REQUEST,
});

const createProductCategorySuccess = (data) => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_CREATE_SUCCESS,
  payload: data,
});

const createProductCategoryFailure = (error) => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_CREATE_FAILURE,
  payload: { error },
});

const createProductCategory = (param) => async (dispatch) => {
  dispatch(createProductCategoryBegin());
  await productCategoryApiService.createProductCategory(param, dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(createProductCategorySuccess(data));
      showAlert('success', 'Operation Successful!', 5);
      history.push(productCategoryRouteLinks.show(data.id));
    })
    .catch((err) => {
      checkHttpError(err, 2, 30, dispatch);
      dispatch(createProductCategoryFailure(err));
    });
};

export default createProductCategory;
