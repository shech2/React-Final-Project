import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total: 0,
        quantity: 0,
    },
    reducers: {
        // prevent duplicate products and keep cart quantity 1
        addProduct: (state, action) => {
            const product = action.payload;
            const productExists = state.products.find((p) => p._id === product._id);
            if (productExists) {
                productExists.quantity += 1;
                state.total += product.price;
            } else {
                state.products.push({ ...product, quantity: product.quantity });
                state.quantity += 1;
                state.total += product.price * product.quantity;
            }
        },
        removeProduct: (state, action) => {
            const product = action.payload;
            const productExists = state.products.find((p) => p._id === product._id);
            if (productExists) {
                productExists.quantity -= 1;
            } else {
                state.products.reduce({ ...product, quantity: product.quantity });
                state.quantity -= 1;
            }
            if (product.quantity === 1) {
                state.products = state.products.filter((p) => p._id !== product._id);
                state.quantity -= 1;
            }
            state.total -= product.price;
        },
        emptyCart: (state) => {
            state.products = [];
            state.total = 0;
            state.quantity = 0;
        },
    }
});

export const { addProduct, removeProduct, emptyCart } = cartSlice.actions;
export default cartSlice.reducer;
