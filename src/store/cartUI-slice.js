import { createSlice } from "@reduxjs/toolkit";

const cartUISlice = createSlice({
  name: "cartUI",
  initialState: {
    isOpen: false,
    isOnlinePay: false,
    currentWindow: 'cart'
  },
  reducers: {
    changeModalIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    changeCurrentWindow(state, action) {
        state.currentWindow = action.payload
    },
    changeOnlinePay(state, action) {
      state.isOnlinePay = action.payload
    }
  },
});

export const cartUIActions = cartUISlice.actions;

export default cartUISlice;
