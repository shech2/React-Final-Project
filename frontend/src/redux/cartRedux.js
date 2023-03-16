import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        products: [],
        total: 0,
        quantity: 0,
    },
    reducers: {
        // prevent duplicate products and keep quantity 1
        addProduct: (state, action) => {
            const product = action.payload;
            const productExists = state.products.find((p) => p._id === product._id);
            if (productExists) {
                productExists.quantity += 1;
            } else {
                state.products.push({ ...product, quantity: product.quantity });
            }
            if (!productExists) {
                state.quantity += 1;
            }
            state.total += product.price * product.quantity;
        }
    }
});

export const { addProduct } = cartSlice.actions;
export default cartSlice.reducer;
