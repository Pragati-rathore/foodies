// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItemToCart: (state, action) => {
      console.log(action.payload)
      const item = action.payload;
      console.log(item)
      const existingItem = state.find((cartItem) => cartItem.id === item.id);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.push({ ...item, quantity: 1 });
      }
    },
    incrementCartItemQuantity: (state, action) => {
      console.log(action.payload)
      const item = action.payload;
      console.log(item)

      const existingItem = state.find((cartItem) => cartItem.id === item);

      if (existingItem) {
        existingItem.quantity += 1;
      }
    },
    decrementCartItemQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.find((cartItem) => cartItem.id === item);

      if (existingItem && existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      }
    },
  },
});

export const {
  addItemToCart,
  incrementCartItemQuantity,
  decrementCartItemQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
