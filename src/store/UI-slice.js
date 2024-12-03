import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
  name: "UI",
  initialState: {
    isOpen: false,
    isOnlinePay: false,
    currentModalWindow: 'cart',
    currentWindow: 'meals'
  },
  reducers: {
    changeModalIsOpen(state, action) {
      state.isOpen = action.payload;
    },
    changecurrentModalWindow(state, action) {
        state.currentModalWindow = action.payload
    },
    changeOnlinePay(state, action) {
      state.isOnlinePay = action.payload
    },
    changeCurrentWindow(state, action) {
      state.currentWindow = action.payload
    }
  },
});

export const UIActions = UISlice.actions;

export default UISlice;
