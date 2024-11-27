import React from "react";
import { cartActions } from "../store/cart-slice.js";
import { useDispatch } from "react-redux";
import mockItems from "../store/mock-items.js";
import Meta from "antd/es/card/Meta.js";
import { Card, Flex, Tooltip } from "antd";

const Meals = () => {
  const meals = mockItems;
  const dispatch = useDispatch();
  const handleClick = (meal, size, index) => {
    dispatch(
      cartActions.addItem({
        name: meal.name,
        size,
        price: meal.price,
        index,
      })
    );
  };
  return (
    <Flex wrap gap="2rem" justify="center">
      {meals.map((meal) => {
        return (
          <Card
            key={meal.id}
            style={{ width: "350px" }}
            cover={
              <img
                alt={meal.name}
                src={meal.image}
                style={{ margin: "0.5rem auto", maxWidth: "300px" }}
              />
            }
            actions={[
              ...meal.size.map((size, index) => (
                <Tooltip
                  placement="bottom"
                  title="Нажми чтобы добавить в корзину"
                >
                  <div onClick={() => handleClick(meal, size, index)}>
                    <span>{size}</span>
                  </div>
                </Tooltip>
              )),
            ]}
          >
            <Meta
              title={meal.name}
              description={[
                meal.ingredients.map((ingredient) => (
                  <span>{ingredient}, </span>
                )),
              ]}
            />
          </Card>
        );
      })}
    </Flex>
  );
};

export default Meals;
