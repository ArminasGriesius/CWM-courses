import { useState } from "react";

function App() {
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushrooms"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
    console.log(pizza);
  };

  return <button onClick={handleClick}>ClickMe</button>;
}

export default App;
