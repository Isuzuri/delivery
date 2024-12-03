import { Badge, Button, Flex } from "antd";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import CustomModal from "./CustomModal";
import UISlice, { UIActions } from "../store/UI-slice";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const currentWindow = useSelector((store) => store.UI.currentWindow);
  const dispatch = useDispatch();

  const toOrders = () => {
    currentWindow === "meals"
      ? dispatch(UISlice.actions.changeCurrentWindow("orders"))
      : dispatch(UISlice.actions.changeCurrentWindow("meals"));
  };

  const openModal = () => {
    dispatch(UISlice.actions.changeModalIsOpen(true))
  }

  return (
    <Flex justify="space-between" style={{ margin: "1rem 3rem" }}>
      <div>Моя шаурмичная</div>
      <Flex gap="2rem">
        <Button onClick={toOrders}>
          {currentWindow === "orders" ? "Меню" : "Заказы"}
        </Button>
        <Badge count={cartItems.length}>
          <Button icon={<ShoppingCartOutlined />} onClick={openModal}>
            Корзина
          </Button>
        </Badge>
      </Flex>
      <CustomModal />
    </Flex>
  );
};

export default Header;
