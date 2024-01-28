import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const defaultState = {
  cartItems: [],
  numberOfItemsInCart: 0,
  subtotal: 0,
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
      state.subtotal += product.price * product.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Item added to cart");
    },
    clearCart: () => {
      localStorage.setItem("cart", JSON.stringify(defaultState));
      return defaultState;
    },
    removeItem: (state, action) => {
      const { cartID } = action.payload;
      const findProductInCart = state.cartItems.find(
        (item) => item.cartID === cartID,
      );
      state.cartItems = state.cartItems.filter(
        (item) => item.cartID !== cartID,
      );
      state.numberOfItemsInCart -= findProductInCart.amount;
      state.subtotal -= findProductInCart.price * findProductInCart.amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.error("Item removed from cart");
    },
    editItem: (state, action) => {
      const { cartID, amount } = action.payload;
      const findProductInCart = state.cartItems.find(
        (item) => item.cartID === cartID,
      );
      state.numberOfItemsInCart += amount - findProductInCart.amount;
      state.subtotal +=
        findProductInCart.price * (amount - findProductInCart.amount);
      findProductInCart.amount = amount;
      cartSlice.caseReducers.calculateTotals(state);
      toast.success("Cart updated");
    },
    calculateTotals: (state) => {
      state.tax = 0.1 * state.subtotal;
      state.orderTotal = state.subtotal + state.tax + state.shipping;
      localStorage.setItem("cart", JSON.stringify(state));
    },
  },
});

export const { addItem, editItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
