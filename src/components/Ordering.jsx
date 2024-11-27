import { Button, Flex, Form, Input, Radio } from "antd";
import { useForm } from "antd/es/form/Form";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../store/order-slice";
import { cartUIActions } from "../store/cartUI-slice";

const Ordering = () => {
  const [form] = useForm();
  const dispatch = useDispatch();
  const items = useSelector((store) => store.cart.items);
  const handleSubmit = (userData) => {
    dispatch(ordersActions.createOrder({ userData, items }));
    if (userData.pay === "online") {
      dispatch(cartUIActions.changeCurrentWindow("onlinePay"));
    } else {
      dispatch(cartUIActions.changeCurrentWindow("orderComplete"));
    }
  };

  return (
    <Form
      form={form}
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 18 }}
      onFinish={(values) => handleSubmit(values)}
    >
      <Form.Item
        label="Имя"
        name="name"
        validateDebounce={1000}
        rules={[{ required: true, message: "" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item
        label="Адрес"
        name="address"
        validateDebounce={1000}
        rules={[{ required: true, message: "" }]}
      >
        <Input type="text" />
      </Form.Item>
      <Form.Item
        label="Телефон"
        name="tel"
        validateDebounce={1000}
        rules={[{ len: 9, message: "", required: true }]}
      >
        <Input type="number" addonBefore="+375" />
      </Form.Item>
      <Form.Item label="Оплата" name="pay" rules={[{ required: true }]}>
        <Radio.Group>
          <Radio value="online">Онлайн</Radio>
          <Radio value="offline">При получении</Radio>
        </Radio.Group>
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Далее
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Ordering;
