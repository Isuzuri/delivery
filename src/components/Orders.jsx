import React from "react";
import { List, Table } from "antd";
import { useSelector } from "react-redux";

const Orders = () => {
  const orders = useSelector((store) => store.orders.orderList);
  const columns = [
    {
      title: "Номер заказа",
      dataIndex: "id",
      key: "id",
      width: "15%",
      align: "center",
    },
    {
      title: "Получатель",
      dataIndex: "userData",
      key: "name",
      width: "25%",
      align: "center",
      render: (userData) => userData.name,
    },
    {
      title: "Состав заказа",
      dataIndex: "items",
      key: "items",
      width: "45%",
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
      width: "15%",
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
  ];

  return (
    <Table dataSource={orders} columns={columns} tableLayout="fixed"></Table>
  );
};

export default Orders;
