import { MinusCircleOutlined, PlusCircleOutlined } from "@ant-design/icons";
import { Button, List, Space } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../store/cart-slice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items); 
  const dispatch = useDispatch()
  const cartItemsSummary = cartItems.reduce(
    (acc, item) => (acc += item.price * item.count),
    0
  );

  const handleIncrease = (itemId) => {
    dispatch(cartActions.increaseItemAmount(itemId))
  }

  const handleDecrease = (itemId) => {
    dispatch(cartActions.decreaseItemAmount(itemId))
  }

  return (
    <List
      dataSource={cartItems}
      footer={<div>Стоимость заказа: {cartItemsSummary}р</div>}
      renderItem={(item) => (
        <List.Item
          actions={[
            <Space>               
              <Button icon={<MinusCircleOutlined />} onClick={() => handleDecrease(item.id)} type="text"/>
              {item.count}
              <Button icon={<PlusCircleOutlined />} onClick={() => handleIncrease(item.id)} type="text" />
            </Space>,
          ]}
        >
          <List.Item.Meta title={item.name + ' ' + item.size} description={item.price + 'р'}/>
        </List.Item>
      )}
    />
  );
};

export default Cart;
