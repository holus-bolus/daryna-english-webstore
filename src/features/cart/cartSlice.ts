import { CartItem } from '../../types';
import { createSlice } from '@reduxjs/toolkit';

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity++;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProduct: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload.id);
      if (item) {
        item.quantity--;
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
