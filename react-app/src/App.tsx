import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushrooms"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    console.log(pizza);
  };
  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
    </div>
  );
}

export default App;
