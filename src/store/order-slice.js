import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
  name: "orders",
  initialState: {
    orderList: [],
  },
  reducers: {
    createOrder(state, action) {
      const newOrder = {
        id: state.orderList.length,
        items: action.payload.items,
        userData: action.payload.userData,
        createdAt: Date.now().toString(),
        isComplete: false,
      };
      const changedOrderList = [...state.orderList, newOrder];
      state.orderList = changedOrderList;
    },
    changeOrderStatus(state, action) {
      const changedOrderList = state.orderList.map((order) => {
        if (order.id === action.payload) {
          return {
            ...order,
            isComplete: !order.isComplete,
          };
        }
        return order;
      });
      state.orderList = changedOrderList;
    },
  },
});

export const ordersActions = orderSlice.actions;

export default orderSlice;
