import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ProductType, ProductStatus } from "../../interfaces";
import { productList } from "../../productList";

const selectedProduct = productList[0];
const count = productList.length - 1;

export default createSlice({
  name: "selectedProduct",
  initialState: { selectedProduct },
  reducers: {
    toggleSelectedProduct: (state, action: PayloadAction<IProduct>) => {
      state.selectedProduct = action.payload;
    },
    moveNext: (state) => {
      const currProductIndex = productList.findIndex((product) => product.type === state.selectedProduct.type);
      if (currProductIndex === productList.length - 1) {
        state.selectedProduct = productList[0];
      } else {
        state.selectedProduct = productList[currProductIndex + 1];
      }
    },
    movePrev: (state) => {
      const currProductIndex = productList.findIndex((product) => product.type === state.selectedProduct.type);
      if (currProductIndex === 0) {
        state.selectedProduct = productList[productList.length - 1];
      } else {
        state.selectedProduct = productList[currProductIndex - 1];
      }
    },
  },
});
