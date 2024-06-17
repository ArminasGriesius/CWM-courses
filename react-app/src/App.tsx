import { useState } from "react";
import ExpandableText from "./components/ExpandableText.jsx/ExpandableText";

function App() {
  const [tags, setTags] = useState(["a", "b"]);
  const handleClickAdd = () => {
    setTags([...tags, "c"]);
    console.log(tags);
  };
  const handleClickRemove = () => {
    setTags(tags.filter((tag) => tag !== "a"));
    console.log(tags);
  };
  const handleClickUpdate = () => {
    setTags(tags.map((tag) => (tag === "a" ? (tag = "A") : tag)));
    console.log(tags);
  };
  return (
    <div>
      <button onClick={handleClickAdd}>ClickAdd</button>
      <button onClick={handleClickRemove}>ClickRemove</button>
      <button onClick={handleClickUpdate}>ClickUpdate</button>
    </div>
  );
}

export default App;
