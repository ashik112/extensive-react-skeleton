/* eslint-disable no-unused-vars */
import productCategoryActionTypes from '../actionTypes';
import alertActions from '../../../../redux/actions/alertActions';
import productCategoryApiService from '../../apiServices/productCategoryApiService';
import createProductCategory from './productCategoryCreateActions';
import updateProductCategory from './productCategoryUpdateActions';
import deleteProductCategory from './productCategoryDeleteActions';
import checkHttpError from '../../../../services/checkHttpError';

const fetchProductCategoryListBegin = () => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_LIST_FETCH_REQUEST,
});

const fetchProductCategoryListSuccess = (data) => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_LIST_FETCH_SUCCESS,
  payload: data,
});

const fetchProductCategoryListFailure = (error) => ({
  type: productCategoryActionTypes.PRODUCT_CATEGORY_LIST_FETCH_FAILURE,
  payload: { error },
});

const clearProductCategoryStore = () => ({
  type: productCategoryActionTypes.CLEAR_ALL,
});

const fetchProductCategoryList = () => async (dispatch) => {
  dispatch(fetchProductCategoryListBegin());
  await productCategoryApiService.getProductCategoryList(dispatch)
    .then((res) => {
      const data = res.data !== null ? res.data : {};
      dispatch(fetchProductCategoryListSuccess(data));
    })
    .catch((err) => {
      checkHttpError(err, 1, 5, dispatch);
      dispatch(fetchProductCategoryListFailure(err));
    });
};

const productCategoryActions = {
  fetchProductCategoryList,
  createProductCategory,
  updateProductCategory,
  clearProductCategoryStore,
  deleteProductCategory,
};

export default productCategoryActions;
