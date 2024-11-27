import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    setCartData(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      const isExist = state.items.find(
        (item) =>
          item.name === action.payload.name && item.size === action.payload.size
      );
      if (isExist) {
        state.items.map((item) => {
          if (
            item.name === action.payload.name &&
            item.size === action.payload.size
          ) {
            return (item.count = item.count + 1);
          } else {
            return item;
          }
        });
      } else {
        state.items = [
          ...state.items,
          {
            id: state.items.length + 1,
            name: action.payload.name,
            size: action.payload.size,
            price: action.payload.price[action.payload.index],
            count: 1,
          },
        ];
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseItemAmount(state, action) {
      const changedItems = state.items.map((item) =>
        item.id === action.payload ? {...item, count: item.count + 1 } : item
      );
      state.items = changedItems;
    },
    decreaseItemAmount(state, action) {
      state.items = state.items
        .map((item) => (item.id === action.payload ? {...item, count: item.count - 1} : item))
        .filter((item) => item.count !== 0);
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
