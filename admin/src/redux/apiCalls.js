import { publicRequest, userRequest } from "../requestMethods";
import {
    getProductsStart,
    getProductsSuccess,
    getProductsFailure,
    createProductStart,
    createProductSuccess,
    createProductFailure,
    updateProductStart,
    updateProductSuccess,
    updateProductFailure,
    deleteProductStart,
    deleteProductSuccess,
    deleteProductFailure,
} from "./productsRedux";

export const getProducts = async (dispatch) => {
    dispatch(getProductsStart());
    try {
      const res = await publicRequest.get("/products");
      dispatch(getProductsSuccess(res.data));
    } catch (err) {
      dispatch(getProductsFailure());
    }
  };
  
  export const deleteProduct = async (id, dispatch) => {
    dispatch(deleteProductStart());
    try {
      const res = await publicRequest.delete(`/products/${id}`);
      dispatch(deleteProductSuccess(id));
    } catch (err) {
      dispatch(deleteProductFailure());
    }
  };

  export const updateProduct = async (id,product, dispatch) => {
    dispatch(updateProductStart());
    try {
      const res = await userRequest.put(`/products/${id}`, product);
      dispatch(updateProductSuccess({id: id, product}));
    } catch (err) {
      dispatch(updateProductFailure());
    }
  };
  export const addProduct = async (product, dispatch) => {
    dispatch(createProductStart());
    try {
      const res = await userRequest.post(`/products`, product);
      dispatch(createProductSuccess(res.data));
    } catch (err) {
      dispatch(createProductFailure());
    }
  };