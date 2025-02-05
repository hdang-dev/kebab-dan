import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder, OrderStatus, ICartItem } from "../../interfaces";

const orderList: Array<IOrder> = [];

interface AddOrderPayload {
  detailList: ICartItem[];
  totalQuantity: number;
  totalPrice: number;
  note: string;
  address: string;
  phone: string;
}

interface ToggleOrderStatusPayload {
  orderId: number;
  status: OrderStatus;
}

export default createSlice({
  name: "orderList",
  initialState: { orderList, counter: 0 },
  reducers: {
    addOrder: (state, action: PayloadAction<AddOrderPayload>) => {
      const newOrder = {
        id: state.counter,
        ...action.payload,
        time: new Date().toString(),
        status: OrderStatus.PROGRESSING,
      };
      state.orderList.push(newOrder);
      state.counter += 1;
    },
    toggleOrderStatus: (state, action: PayloadAction<ToggleOrderStatusPayload>) => {
      const selectedOrder = state.orderList.find((order) => order.id === action.payload.orderId);
      if (selectedOrder) {
        selectedOrder.status = action.payload.status;
      }
    },
    removeOrder: (state, action: PayloadAction<number>) => {
      const indexOfSelectedOrder = state.orderList.findIndex((order) => order.id === action.payload);
      state.orderList.splice(indexOfSelectedOrder, 1);
    },
  },
});
