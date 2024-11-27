import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Ordering from "./Ordering";
import Cart from "../components/Cart";
import { cartUIActions } from "../store/cartUI-slice";
import OnlinePay from "./OnlinePay";
import { Modal } from "antd";
import CustomModalFooter from "./CustomModalFooter";
import OrderComplete from "./OrderComplete";
import Orders from "./Orders";

const CustomModal = () => {
  const isOpen = useSelector((store) => store.cartUI.isOpen);
  const currentWindow = useSelector((store) => store.cartUI.currentWindow);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(cartUIActions.changeModalIsOpen(false));
    dispatch(cartUIActions.changeCurrentWindow("cart"));
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      footer={
        currentWindow === "ordering" || currentWindow === "onlinePay" ? (
          ""
        ) : (
          <CustomModalFooter />
        )
      }
      width={currentWindow === "orders" ? "80%" : "520px"}
    >
      {currentWindow === "cart" && <Cart />}
      {currentWindow === "ordering" && <Ordering />}
      {currentWindow === "onlinePay" && <OnlinePay />}
      {currentWindow === "orderComplete" && <OrderComplete />}
      {currentWindow === "orders" && <Orders />}
    </Modal>
  );
};

export default CustomModal;
