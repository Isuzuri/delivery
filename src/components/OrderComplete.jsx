import { Flex } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const OrderComplete = () => {
  const orderList = useSelector((store) => store.orders.orderList);

  return (
    <Flex align="center" vertical>
      <div>Спасибо за заказ</div>
      <div>Номер заказа: {orderList.length - 1}</div>
    </Flex>
  );
};

export default OrderComplete;
