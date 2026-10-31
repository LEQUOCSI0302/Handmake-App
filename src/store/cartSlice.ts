import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { Product } from "../services/mockData";
export const CART_STORAGE_KEY = "handmake-key";

export interface CartItem {
    product: Product;
    quantity: number;
}

function loadCart(): CartItem[]{
    try{
        const raw = localStorage.getItem(CART_STORAGE_KEY);
        return raw ? (JSON.parse(raw) as CartItem[])  : [];
    }catch(error){
        return [];
    }
}

const cartSlice = createSlice({
    name: "cart",
    initialState: { items: loadCart() },
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const found = state.items.find((i) => i.product.id === action.payload.id);
            if(found){
                found.quantity += 1;
            }else{
                state.items.push({ product: action.payload, quantity: 1 });
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((i) => i.product.id !== action.payload)
        },
        setQuantity: (state, action: PayloadAction<{ id: number,quantity: number }>) => {
            if( action.payload.quantity <= 0 ){
                state.items = state.items.filter((i) => i.product.id !== action.payload.id);
                return;
            }
            const found = state.items.find((i) => i.product.id === action.payload.id);
            if(found){
                found.quantity = action.payload.quantity;
            }
        },
        clearQuantity: (state) => {
            state.items = [];
        }
    }
});

export const {addToCart, removeFromCart, setQuantity,clearQuantity } = cartSlice.actions;
export default cartSlice.reducer;