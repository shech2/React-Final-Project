import { createSlice } from '@reduxjs/toolkit';

export const ordersSlice = createSlice({
    name: 'orders',
    initialState: {
        orders: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getOrdersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        getOrdersSuccess: (state, action) => {
            state.isFetching = false;
            state.orders = action.payload;
        }
        ,
        getOrdersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
        ,
        updateOrdersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        updateOrdersSuccess: (state, action) => {
            state.isFetching = false;
            state.orders[state.orders.findIndex((item) => item._id === action.payload.id)] = action.payload.order; 
        }
        ,
        updateOrdersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
        ,
        deleteOrdersStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        deleteOrdersSuccess: (state, action) => {
            state.isFetching = false;
            state.orders.splice(
                state.orders.findIndex((item) => item._id === action.payload),
                1
              );          
        },
        deleteOrdersFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getOrdersStart,
    getOrdersSuccess,
    getOrdersFailure,
    updateOrdersStart,
    updateOrdersSuccess,
    updateOrdersFailure,
    deleteOrdersStart,
    deleteOrdersSuccess,
    deleteOrdersFailure,
} = ordersSlice.actions;

export default ordersSlice.reducer;