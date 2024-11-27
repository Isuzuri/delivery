import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import cartUISlice from "./cartUI-slice";
import orderSlice from "./order-slice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        cartUI: cartUISlice.reducer,
        orders: orderSlice.reducer
    }
})

export default store