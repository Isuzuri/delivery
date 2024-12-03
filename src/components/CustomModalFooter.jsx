import { Button } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { UIActions } from "../store/UI-slice";
import { cartActions } from "../store/cart-slice";

const CustomModalFooter = () => {
  const currentModalWindow = useSelector((store) => store.UI.currentModalWindow);
  const isOnlinePay = useSelector((store) => store.UI.isOnlinePay);
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleOk = () => {
    if (currentModalWindow === "cart") {
      dispatch(UIActions.changecurrentModalWindow("ordering"));
    }
    if (currentModalWindow === "ordering" && isOnlinePay) {
      dispatch(UIActions.changecurrentModalWindow("onlinePay"));
    }
    if (currentModalWindow === "ordering" && !isOnlinePay) {
      dispatch(UIActions.changecurrentModalWindow("orderComplete"));
    }
    if (currentModalWindow === "orderComplete") {
      dispatch(UIActions.changeModalIsOpen(false));
      dispatch(cartActions.setCartData([]));
      dispatch(UIActions.changecurrentModalWindow("cart"));
    }
    if (currentModalWindow === "orders") {
      dispatch(UIActions.changeModalIsOpen(false));
    }
  };

  return (
    <>
      <Button
        type="primary"
        onClick={handleOk}
        disabled={cartItems.length <= 0 ? true : false}
      >
        {currentModalWindow === "orderComplete" || currentModalWindow === "orders"
          ? "Закрыть"
          : "Далее"}
      </Button>
    </>
  );
};

export default CustomModalFooter;
