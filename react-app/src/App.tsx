import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "John",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Bob" } });
    console.log(game);
  };
  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
    </div>
  );
}

export default App;
