import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Ordering from "./Ordering";
import Cart from "../components/Cart";
import { UIActions } from "../store/UI-slice";
import OnlinePay from "./OnlinePay";
import { Modal } from "antd";
import CustomModalFooter from "./CustomModalFooter";
import OrderComplete from "./OrderComplete";

const CustomModal = () => {
  const isOpen = useSelector((store) => store.UI.isOpen);
  const currentModalWindow = useSelector((store) => store.UI.currentModalWindow);
  const dispatch = useDispatch();

  const handleCancel = () => {
    dispatch(UIActions.changeModalIsOpen(false));
    dispatch(UIActions.changecurrentModalWindow("cart"));
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleCancel}
      footer={
        currentModalWindow === "ordering" || currentModalWindow === "onlinePay" ? (
          ""
        ) : (
          <CustomModalFooter />
        )
      }
    >
      {currentModalWindow === "cart" && <Cart />}
      {currentModalWindow === "ordering" && <Ordering />}
      {currentModalWindow === "onlinePay" && <OnlinePay />}
      {currentModalWindow === "orderComplete" && <OrderComplete />}
    </Modal>
  );
};

export default CustomModal;
