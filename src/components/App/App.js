import { useEffect, useState } from "react";
import "./App.css";
import { getOrders, postOrder } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";


function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
    .then(data => {
      console.log('fetch data', data.orders)
      setOrders(data.orders)
    })
    .catch((err) => console.error("Error fetching:", err));
  }, []);


  function addOrder(newOrder) {
    // let ordersArray = orders.orders;
    console.log('new order', newOrder)
    postOrder(newOrder)
    .then(jsonResponse => {
      console.log('jsonResponse', jsonResponse)
      console.log(orders)
      setOrders([...orders, jsonResponse])
    })
    .catch(error => {console.error(error)})
    // .then(console.log(newOrder))
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm addOrder={addOrder}/>
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;
