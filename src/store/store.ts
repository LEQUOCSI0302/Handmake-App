import { configureStore } from "@reduxjs/toolkit";
import cartReducer, { CART_STORAGE_KEY } from "./cartSlice";
import authReducer, { AUTH_STORAGE_KEY } from "./authSlice";
export const store = configureStore({
    reducer: {cart: cartReducer, auth: authReducer},

});
store.subscribe(() =>{
    try{
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(store.getState().cart.items));

        const user = store.getState().auth.user;
        if (user) {
            localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(user));
        } else {
            localStorage.removeItem(AUTH_STORAGE_KEY);
        }
    }catch(error){

    }
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

