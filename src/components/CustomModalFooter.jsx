import { Button } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartUIActions } from "../store/cartUI-slice";
import { cartActions } from "../store/cart-slice";

const CustomModalFooter = () => {
  const currentWindow = useSelector((store) => store.cartUI.currentWindow);
  const isOnlinePay = useSelector((store) => store.cartUI.isOnlinePay);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleOk = () => {
    if (currentWindow === "cart") {
      dispatch(cartUIActions.changeCurrentWindow("ordering"));
    }
    if (currentWindow === "ordering" && isOnlinePay) {
      dispatch(cartUIActions.changeCurrentWindow("onlinePay"));
    }
    if (currentWindow === "ordering" && !isOnlinePay) {
      dispatch(cartUIActions.changeCurrentWindow("orderComplete"));
    }
    if (currentWindow === "orderComplete") {
      dispatch(cartUIActions.changeModalIsOpen(false));
      dispatch(cartActions.setCartData([]));
      dispatch(cartUIActions.changeCurrentWindow("cart"));
    }
    if (currentWindow === "orders") {
      dispatch(cartUIActions.changeModalIsOpen(false));
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={handleOk}
        disabled={cartItems.length <= 0 ? true : false}
      >
        {currentWindow === "orderComplete" || currentWindow === "orders"
          ? "Закрыть"
          : "Далее"}
      </Button>
    </>
  );
};

export default CustomModalFooter;
