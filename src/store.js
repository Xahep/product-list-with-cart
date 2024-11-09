import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './features/cart/CartSlice.js'
import { saveCartState } from './utils/localStorage.js';

const store = configureStore({
    reducer: {
        cart: cartReducer,
    }
});

store.subscribe(() => {
    saveCartState(store.getState().cart);
})

export default store