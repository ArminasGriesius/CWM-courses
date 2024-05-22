import { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import Like from "./components/Like/Like";

function App() {
  const [isVisible, setIsVisible] = useState(false);
  let count = 0;

  const handleClick = () => {
    setIsVisible(!isVisible);
    count++;
    console.log(isVisible);
    console.log("count ===", count);
  };
  console.log("count outside ===", count);
  return (
    <div>
      <button onClick={handleClick}>Show</button>
      {/* <Buttons onClick={() => {}}>My Button</Buttons> */}
      {/* <Like onClick={() => console.log("clicked")} /> */}
    </div>
  );
}

export default App;
