import { IProduct } from "../interfaces";
import { RootState } from "./store";

export const productListSelector = (state: RootState) => state.productList;
export const selectedProductSelector = (state: RootState) => state.selectedProduct.selectedProduct;
export const cartItemListSelector = (state: RootState) => state.cart;
export const orderListSelector = (state: RootState) => state.orderList;
