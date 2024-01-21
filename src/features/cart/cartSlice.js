import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numberOfItemsInCart: 0,
  subTotal: 0,
  shipping: 500,
  tax: 0,
  orderTotal: 0,
};

const getCartFromLocalStorage = () => {
  return JSON.parse(localStorage.getItem("cart")) || defaultState;
};

const cartSlice = createSlice({
  name: "cart",
  initialState: getCartFromLocalStorage(),
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
      state.subTotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item added to cart");
    },
    clearCart: (state) => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const findProductInCart = state.cartItems.find(
        (item) => item.cartID === cartID,
      );
      state.cartItems.filter((item) => item.cartID !== cartID);
      state.numberOfItemsInCart -= findProductInCart.amount;
      state.subTotal -= findProductInCart.price * findProductInCart.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Item removed from cart");
    },
    calculateTotals: (state) => {
      state.tax = 0.7 * state.subTotal;
      state.orderTotal = state.subTotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem } = cartSlice.actions;

export default cartSlice.reducer;
