import React from "react";
import { List, Switch, Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ordersActions } from "../store/order-slice";

const Orders = () => {
  const dispatch = useDispatch();
  const changeIsComplete = (orderStatus) => {
    dispatch(ordersActions.changeOrderStatus(orderStatus));
  };
  const orders = useSelector((store) => store.orders.orderList);

  const columns = [
    {
      title: "Номер заказа",
      dataIndex: "id",
      key: "id",
      align: "center",
    },
    {
      title: "Получатель",
      dataIndex: "userData",
      key: "name",
      align: "center",
      render: (userData) => userData.name,
    },
    {
      title: "Состав заказа",
      dataIndex: "items",
      key: "items",
      align: "center",
      render: (items) => (
        <List
          size="small"
          dataSource={items}
          renderItem={(item) => (
            <List.Item>
              {item.name} {item.size} (x{item.count})
            </List.Item>
          )}
        />
      ),
    },
    {
      title: "Время оформления заказа",
      dataIndex: "createdAt",
      key: "createdAt",
      align: "center",
      render: (createdAt) =>
        new Intl.DateTimeFormat("ru-RU", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        }).format(createdAt),
    },
    {
      title: "Статус заказа",
      dataIndex: "id",
      key: "isComplete",
      align: "center",
      render: (id, order) => (
        <Switch
          checked={order.isComplete}
          onClick={() => changeIsComplete(id)}
        />
      ),
    },
  ];

  return (
    <Table dataSource={orders} columns={columns} tableLayout="fixed"></Table>
  );
};

export default Orders;
