import {
  get, post, patch, remove,
} from '../../../services/apiService';
import { serverURL } from '../../../constants';
import { productCategoryBaseURL } from '../constants';

export const productCategoryApiRoutes = {
  productCategoryList: `${productCategoryBaseURL}/list`,
  productCategory: (id) => `${productCategoryBaseURL}/show/${id}`,
  productCategoryCreate: `${productCategoryBaseURL}/new`,
  productCategoryUpdate: (id) => `${productCategoryBaseURL}/update/${id}`,
  productCategoryDelete: (id) => `${productCategoryBaseURL}/delete/${id}`,
};

const getProductCategoryList = (dispatch) => get(`${serverURL}${productCategoryApiRoutes.productCategoryList}`, dispatch);
const getProductCategory = (id, dispatch = () => {}) => get(`${serverURL}${productCategoryApiRoutes.productCategory(id)}`, dispatch);
const updateProductCategory = (id, param, dispatch) => patch(`${serverURL}${productCategoryApiRoutes.productCategoryUpdate(id)}`, param, dispatch);
const deleteProductCategory = (id, dispatch) => remove(`${serverURL}${productCategoryApiRoutes.productCategoryDelete(id)}`, dispatch);
const createProductCategory = (param, dispatch) => post(`${serverURL}${productCategoryApiRoutes.productCategoryCreate}`, param, dispatch);

const productCategoryApiService = {
  productCategoryApiRoutes,
  getProductCategoryList,
  getProductCategory,
  updateProductCategory,
  deleteProductCategory,
  createProductCategory,
};

export default productCategoryApiService;
