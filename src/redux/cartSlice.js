import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []        // [{id,name,price,img,quantity}]
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const p = action.payload;
      if (!state.items.find(i => i.id === p.id)) {
        state.items.push({ ...p, quantity: 1 });
      }
    },
    increment(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrement(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
    },
    clearCart(state) {
      state.items = [];
    }
  }
});

export const { addToCart, increment, decrement, removeItem, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
