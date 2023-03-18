import { createSlice } from '@reduxjs/toolkit';

export const productsSlice = createSlice({
    name: 'products',
    initialState: {
        products: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getProductsStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        getProductsSuccess: (state, action) => {
            state.isFetching = false;
            state.products = action.payload;
        }
        ,
        getProductsFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
        ,
        createProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        createProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.push(action.payload);
        }
        ,
        createProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
        ,
        updateProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        updateProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product; 
        }
        ,
        updateProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
        ,
        deleteProductStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        deleteProductSuccess: (state, action) => {
            state.isFetching = false;
            state.products.splice(
                state.products.findIndex((item) => item._id === action.payload),
                1
              );          
        },
        deleteProductFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
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
} = productsSlice.actions;

export default productsSlice.reducer;