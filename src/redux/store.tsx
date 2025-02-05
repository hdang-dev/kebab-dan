import { configureStore } from "@reduxjs/toolkit";
import OrderListSlice from "./slices/OrderListSlice";
import ProductListSlice from "./slices/ProductListSlice";
import SelectedProductSlice from "./slices/SelectedProductSlice";
import CartSlice from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    productList: ProductListSlice.reducer,
    orderList: OrderListSlice.reducer,
    selectedProduct: SelectedProductSlice.reducer,
    cart: CartSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
