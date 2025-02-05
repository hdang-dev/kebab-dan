import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IProduct, ProductType, ProductStatus } from "../../interfaces";
import { productList } from "../../productList";


export default createSlice({
  name: "productList",
  initialState: productList,
  reducers: {
    toggleProductStatus: (state, action: PayloadAction<ProductType>) => {
      const selectedProduct = state.find((product) => product.type === action.payload);
      if (selectedProduct) {
        if (selectedProduct.status === ProductStatus.AVAILABLE) {
          selectedProduct.status = ProductStatus.SOLDOUT;
        } else {
          selectedProduct.status = ProductStatus.AVAILABLE;
        }
      }
    },
  },
});
