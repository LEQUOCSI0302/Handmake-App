import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CART_STORAGE_KEY } from "./cartSlice";
export const store = configureStore({
    reducer: {cart: cartReducer},

});
store.subscribe(() =>{
    try{
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(store.getState().cart.items));
    }catch(error){

    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

