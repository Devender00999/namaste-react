import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
   name: "cart",
   initialState: {
      items: [],
   },
   reducers: {
      addItem: (state, action) => {
         state.items.push(action.payload);
      },
      removeItem: (state, action) => {
         state.items.filter((item) => item.id !== action.payload.id);
      },
      clearCart: (state) => {
         state.items.length = 0;
      },
   },
});

export default cardSlice.reducer;

export const { addItem, clearCart, removeItem } = cardSlice.actions;
