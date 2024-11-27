import { Badge, Button, Flex } from "antd";
import React from "react";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import CustomModal from "./CustomModal";
import { cartUIActions } from "../store/cartUI-slice";

const Header = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  

  const openModal = (param = "") => {
    if (param === "orders") {
      dispatch(cartUIActions.changeCurrentWindow("orders"));
    } else {
      dispatch(cartUIActions.changeCurrentWindow("cart"));
    }
    dispatch(cartUIActions.changeModalIsOpen(true));
  };
  
  return (
    <Flex justify="space-between" style={{ margin: "1rem 3rem" }}>
      <div>Моя шаурмичная</div>
      <Flex gap="2rem">
        <Button onClick={() => openModal("orders")}>Заказы</Button>
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
