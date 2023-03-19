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
import {
  getUserStart,
  getUserSuccess,
  getUserFailure,
  updateUserStart,
  updateUserSuccess,
  updateUserFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "./userRedux";

import {
  getOrdersStart,
  getOrdersSuccess,
  getOrdersFailure,
  deleteOrdersFailure,
  deleteOrdersStart,
  deleteOrdersSuccess,
  updateOrdersStart,
  updateOrdersSuccess,
  updateOrdersFailure,
} from "./orderRedux";


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

export const updateProduct = async (id, product, dispatch) => {
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    dispatch(updateProductSuccess({ id: id, product }));
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

export const getUsers = async (dispatch) => {
  dispatch(getUserStart());
  try {
    const res = await userRequest.get("/users");
    dispatch(getUserSuccess(res.data));
  } catch (err) {
    dispatch(getUserFailure());
  }
};

export const deleteUser = async (uid, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`/users/${uid}`);
    dispatch(deleteUserSuccess({ uid }));
  } catch (err) {
    dispatch(deleteUserFailure());
  }
};

export const updateUser = async (uid, user, dispatch) => {
  dispatch(updateUserStart());
  try {
    const res = await userRequest.put(`/users/${uid}`, user);
    dispatch(updateUserSuccess({ user }));
  } catch (err) {
    dispatch(updateUserFailure());
  }
};

export const getOrders = async (dispatch) => {
  dispatch(getOrdersStart());
  try {
    const res = await userRequest.get("/orders");
    dispatch(getOrdersSuccess(res.data));
  } catch (err) {
    dispatch(getOrdersFailure());
  }
};

export const deleteOrder = async (id, dispatch) => {
  dispatch(deleteOrdersStart());
  try {
    const res = await userRequest.delete(`/orders/${id}`);
    dispatch(deleteOrdersSuccess(id));
  } catch (err) {
    dispatch(deleteOrdersFailure());
  }
}

export const updateOrder = async (id, order, dispatch) => {
  dispatch(updateOrdersStart());
  try {
    const res = await userRequest.put(`/orders/${id}`, order);
    dispatch(updateOrdersSuccess({ id: id, order }));
  } catch (err) {
    dispatch(updateOrdersFailure());
  }
};

