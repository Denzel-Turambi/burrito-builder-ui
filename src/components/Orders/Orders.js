import React from "react";
import "./Orders.css";

const Orders = (props) => {
  if (!props.orders || props.orders.length === 0) {
    return <p>No orders yet!</p>;
  }
  console.log('ORDER PROPS', props.orders)
  const orderEls = props.orders.orders.map((order) => {
    console.log('order', order)
    return (
      <div className="order">
      <h3>{order.name}</h3>
      <ul className="ingredient-list">
        {order.ingredients.map((ingredient) => {
          return <li>{ingredient}</li>;
        })}
      </ul>
    </div>
    );
  });

  return (
    // <section>{orderEls.length ? orderEls : <p>No orders yet!</p>}</section>
    <section>{orderEls}</section>
    // <p>test</p>
  );
};

export default Orders;
