import { configureStore, createSlice, PayloadAction } from '@reduxjs/toolkit';


interface CartItem {
    id: string;
    name: string;
    price: number;
    quautity: number;
}

interface CartState {
    items: CartItem[];
}

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addItem: (state, action:PayloadAction<CartItem>) =>{
            const item = state.items.find(item => item.id === action.payload.id);
            if(item) {
                item.quautity += action.payload.quautity;
            } else {
                state.items.push (action.payload);
            }
        },
        removeItem: (state, action:PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) =>{
            state.items = [];
        },
    },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

const store = configureStore({
    reducer:{
        cart: cartSlice.reducer,
    },
});

export type RootState = ReturnType <typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;