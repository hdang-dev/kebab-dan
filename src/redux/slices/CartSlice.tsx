import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { productList } from "../../productList";
import { ICartItem } from "../../interfaces";

const cartItemList: Array<ICartItem> = productList.map((product) => {
  return { product: { ...product }, quantity: 0 };
});

export default createSlice({
  name: "cart",
  initialState: cartItemList,
  reducers: {
    addCartItem: (state, action: PayloadAction<ICartItem>) => {
      for (let cartItem of state) {
        if (cartItem.product.type === action.payload.product.type) {
          cartItem.quantity += action.payload.quantity;
        }
      }
    },
    setCartItem: (state, action: PayloadAction<ICartItem>) => {
      for (let cartItem of state) {
        if (cartItem.product.type === action.payload.product.type) {
          cartItem.quantity = action.payload.quantity;
        }
      }
    },
    resetCart: (state) => {
      for (let cartItem of state) {
        cartItem.quantity = 0;
      }
    },
  },
});
