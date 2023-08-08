import { useState, useEffect } from "react";


function OrderForm(props) {
  // console.log('FORM PROPS', props)
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    const newOrder = {
      name: name,
      ingredients: ingredients
    }
    props.addOrder(newOrder);
    clearInputs();
  }

  function addIngredient(event) {
    event.preventDefault()
    // if (ingredients.filter(ingredient => ingredient === event.target.name).length < 2) {
      setIngredients([...ingredients, event.target.name])
    // }
  }

  function clearInputs() {
    setName("");
    setIngredients([]);
  };

  function handleChange(e) {
    setName(e.target.value)
  }

  const possibleIngredients = [
    "beans",
    "steak",
    "carnitas",
    "sofritas",
    "lettuce",
    "queso fresco",
    "pico de gallo",
    "hot sauce",
    "guacamole",
    "jalapenos",
    "cilantro",
    "sour cream",
  ];
  const ingredientButtons = possibleIngredients.map((ingredient) => {
    return (
      <button
        key={ingredient}
        name={ingredient}
        onClick={(e) => addIngredient(e)}
      >
        {ingredient}
      </button>
    );
  });

  return (
    <form>
      <input
        type="text"
        placeholder="Name"
        name="name"
        value={name}
        onChange={(e) => handleChange(e)}
      />

      {ingredientButtons}

      <p>Order: {ingredients.join(", ") || "Nothing selected"}</p>

      <button onClick={(e) => handleSubmit(e)}>Submit Order</button>
    </form>
  );
}

export default OrderForm;
