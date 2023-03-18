import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        isFetching: false,
        error: false,
    },
    reducers: {
        //GET ALL
        getUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        getUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users = action.payload;
        }
        ,
        getUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
        ,
        createUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        createUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.push(action.payload);
        }
        ,
        createUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
        ,
        updateUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        updateUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users[state.products.findIndex((item) => item._id === action.payload.id)] = action.payload.product; 
        }
        ,
        updateUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        }
        ,
        deleteUserStart: (state) => {
            state.isFetching = true;
            state.error = false;
        }
        ,
        deleteUserSuccess: (state, action) => {
            state.isFetching = false;
            state.users.splice(
                state.products.findIndex((item) => item._id === action.payload),
                1
              );          
        },
        deleteUserFailure: (state) => {
            state.isFetching = false;
            state.error = true;
        },
    },
});

export const {
    getUserStart,
    getUserSuccess,
    getUserFailure,
    createUserStart,
    createUserSuccess,
    createUserFailure,
    updateUserStart,
    updateUserSuccess,
    updateUserFailure,
    deleteUserStart,
    deleteUserSuccess,
    deleteUserFailure,
} = userSlice.actions;

export default userSlice.reducer;