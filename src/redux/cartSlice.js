import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "furniro cart",
  initialState: {
    cart: [],
    total: 0,
  },
  reducers: {
    addItem: (state, action) => {
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.cart.push({ ...action.payload, quantity: 1 });
      }
      state.total += action.payload.price;
    },
    removeItem: (state, action) => {
      const existingitem = state.cart.find(
        (item) => item.id === action.payload.id,
      );
      if (!existingitem) return;
      if (existingitem.quantity > 1) {
        existingitem.quantity -= 1;
      } else {
        state.cart = state.cart.filter((item) => item.id !== action.payload.id);
      }
      state.total -= action.payload.price;
    },
  },
});
export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
