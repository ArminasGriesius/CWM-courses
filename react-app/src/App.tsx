import { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import Like from "./components/Like/Like";
import Message from "./components/Message/Message";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug1", fixed: false },
    { id: 2, title: "Bug2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return <div></div>;
}

export default App;
