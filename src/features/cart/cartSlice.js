import { createSlice } from "@reduxjs/toolkit";

const defaultState = {
  cartItems: [],
  numberOfItemsInCart: 0,
  cartSubTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: defaultState,
  reducers: {
    addItem: (state, action) => {
      console.log(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
