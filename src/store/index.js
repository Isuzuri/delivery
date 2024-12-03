import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import UISlice from "./UI-slice";
import orderSlice from "./order-slice";

const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
        UI: UISlice.reducer,
        orders: orderSlice.reducer
    }
})

export default store