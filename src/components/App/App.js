import { useEffect, useState } from "react";
import "./App.css";
import { getOrders } from "../../apiCalls";
import Orders from "../../components/Orders/Orders";
import OrderForm from "../../components/OrderForm/OrderForm";

function App() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getOrders()
    .then(data => setOrders(data))
    .catch((err) => console.error("Error fetching:", err));
  }, []);

  function handleClick() {
    console.log('handle click')
  }

  function handleChange() {
    console.log('handle change')
  }

  return (
    <main className="App">
      <header>
        <h1>Burrito Builder</h1>
        <OrderForm handleClick={handleClick} handleChange={handleChange}/>
      </header>

      <Orders orders={orders} />
    </main>
  );
}

export default App;
