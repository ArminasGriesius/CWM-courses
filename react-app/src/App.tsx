import { useState } from "react";

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

  return <button onClick={handleClick}>ClickMe</button>;
}

export default App;
