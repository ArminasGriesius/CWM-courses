import { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import Like from "./components/Like/Like";
import Message from "./components/Message/Message";

function App() {
  const [tags, setTags] = useState(["happy", "cheerful"]);
  const handleClick = () => {
    // add new item to array
    setTags([...tags, "exciting"]);

    //remove
    setTags(tags.filter((tag) => tag != "happy"));

    //update
    setTags(tags.map((tag) => (tag === "happy" ? "happines" : tag)));
  };

  return <div></div>;
}

export default App;
