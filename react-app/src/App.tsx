import { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import Like from "./components/Like/Like";
import Message from "./components/Message/Message";

function App() {
  const [drink, setDrink] = useState({
    title: "Americano",
    price: 5,
  });

  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div>
      {drink.price}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
