import React from "react";
import { Button, Flex, Form, Input } from "antd";
import { useForm } from "antd/es/form/Form";

const OnlinePay = () => {
  const [form] = useForm();
  const handleSubmit = (userData) => {};

  return (
    <Form
      form={form}
      wrapperCol={{ span: 22 }}
      onFinish={(values) => handleSubmit(values)}
    >
      <Form.Item
        name="cardNumber"
        validateDebounce={1000}
        rules={[{ required: true, len: 16, message: "Неверный формат" }]}
      >
        <Input type="number" placeholder="Номер карты" />
      </Form.Item>
      <Form.Item
        name="cardHolder"
        validateDebounce={1000}
        rules={[{ required: true, message: "" }]}
      >
        <Input type="text" placeholder="Держатель карты" />
      </Form.Item>
      <Flex>
        <Form.Item
          name="expDate"
          validateDebounce={1000}
          rules={[{ required: true, message: "Неверный формат" }]}
        >
          <Input type="number" placeholder="Срок действия" />
        </Form.Item>
        <Form.Item
          name="cvc"
          validateDebounce={1000}
          rules={[{ required: true, len: 3, message: "Неверный формат" }]}
        >
          <Input type="number" placeholder="CVC/CVV" />
        </Form.Item>
        <Form.Item></Form.Item>
      </Flex>
      <Button htmlType="submit" type="primary">
        Далее
      </Button>
    </Form>
  );
};

export default OnlinePay;
