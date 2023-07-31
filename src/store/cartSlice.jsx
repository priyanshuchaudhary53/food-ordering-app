import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [], totalAmount: 0 },
  reducers: {
    addItem(state, action) {
      const newItem = action.payload;

      state.totalAmount = state.totalAmount + newItem.amount * newItem.price;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === newItem.id
      );

      const existingItem = state.items[existingItemIndex];

      if (existingItem) {
        existingItem.amount = existingItem.amount + newItem.amount;
      } else {
        state.items.push(newItem);
      }
    },
    removeItem(state, action) {
      const itemId = action.payload;
      const existingItem = state.items.filter((item) => item.id === itemId);
      state.totalAmount =
        state.totalAmount - existingItem[0].price * existingItem[0].amount;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    clearCart(state) {
      state.items = [];
      state.totalAmount = 0;
    },
    reduceItem(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === itemId
      );
      const existingItem = state.items[existingItemIndex];
      state.totalAmount = state.totalAmount - existingItem.price;
      if (existingItem.amount > 1) {
        existingItem.amount--;
      } else {
        state.items = state.items.filter((item) => item.id !== itemId);
      }
    },
    increaseItem(state, action) {
      const itemId = action.payload;
      const existingItemIndex = state.items.findIndex(
        (item) => item.id === itemId
      );
      const existingItem = state.items[existingItemIndex];
      state.totalAmount = state.totalAmount + existingItem.price;
      existingItem.amount++;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
