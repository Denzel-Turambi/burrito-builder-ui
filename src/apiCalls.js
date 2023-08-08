export const getOrders = () => {
  return fetch("http://localhost:3001/api/v1/orders").then((response) => response.json());
};

export const postOrder = (order) => {
  console.log('post order', order)
  return fetch('http://localhost:3001/api/v1/orders', {
    method: 'POST',
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(order)
  })
  .then(res => res.json())
  .then(data => console.log('data', data))
}