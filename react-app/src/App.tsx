import { useState } from "react";
import ExpandableText from "./components/ExpandableText.jsx/ExpandableText";
import produce from "immer";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
  ]);

  const handleClick = () => {
    setBugs(
      produce((draft) => {
        const bug = draft.find((bug) => bug.id === 1);
        if (bug) bug.fixed = true;
      })
    );
    console.log(bugs);
  };

  return (
    <div>
      <button onClick={handleClick}>ClickMe</button>
    </div>
  );
}

export default App;
