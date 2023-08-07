export const getOrders = () => {
  return fetch("http://localhost:3001/api/v1/orders").then((response) => response.json());
};

export const postOrder = (order) => {
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    body: JSON.stringify(order
      // id: order.id,
      // name: order.name,
      // ingredients: order.ingredients
    ),
    headers: {
      "Content-type": "application.json"
    }
  })
  .then(res => res.json())
  .then(data => console.log(data))
}