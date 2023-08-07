import { useEffect, useState } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";
// import { postOrder } from "../../apiCalls";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
    .then(data => setOrders(data))
    .catch((err) => console.error("Error fetching:", err));
  }, []);

  // function handleClick() {
  //   console.log('handle click')
  // }

  // function handleChange() {
  //   console.log('handle change')
  // }

  // function handleNewOrder(newOrder) {
  //   setOrders((prevOrders) => [...prevOrders, newOrder]);
  // }

  // useEffect(() => {
  //   if (orders.length === 0) return;
  //   const latestOrder = orders[orders.length - 1];

  //   postOrder(latestOrder)
  //     .then((data) => {
  //       console.log("POST request successful:", data);
  //     })
  //     .catch((err) => console.error("Error submitting order:", err));
  // }, [orders]);

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm />
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;
