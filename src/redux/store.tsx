import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlice";
import currencySlice from "./slices/currencySlice";

const store = configureStore({
    reducer: {
       currency:currencySlice,
       cart:cartSlice,
    }
})

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;