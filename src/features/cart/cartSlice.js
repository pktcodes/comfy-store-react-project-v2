import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

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
      const { product } = action.payload;
      const findProductInCart = state.cartItems.find(
        (item) => item.cartID === product.cartID,
      );
      if (findProductInCart) {
        findProductInCart.amount += product.amount;
      } else {
        state.cartItems.push(product);
      }
      state.numberOfItemsInCart += product.amount;
      state.cartSubTotal += product.price;
      state.tax = 0.7 * state.cartSubTotal;
      state.orderTotal = state.cartSubTotal + state.tax + state.shipping;
      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
      toast.success("Item added to cart");
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
