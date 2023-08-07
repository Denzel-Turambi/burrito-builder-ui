import { useEffect, useState } from "react";
import "./App.css";
import { getOrders, postOrder } from "../../apiCalls";
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


  function addOrder(newOrder) {
    postOrder(newOrder)
    .then(res => {
      console.log(res)
      setOrders([...orders, res])
    })
    .catch(error => {console.error(error)})
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
