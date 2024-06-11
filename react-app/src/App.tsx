import { useState } from "react";
import NavBar from "./components/NavBar";
import Cart from "./components/Cart";
import ExpandableText from "./components/ExpandableText.jsx/ExpandableText";

function App() {
  return (
    <ExpandableText
      text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem modi inventore delectus iusto pariatur ducimus reprehenderit quam, ipsum similique maiores consectetur. Soluta quod, odio pariatur corrupti quaerat, aliquid quia, minima quos dignissimos amet quam! Voluptatem, praesentium rem? Aspernatur ut sapiente magni pariatur sed dolores nam numquam corrupti, est debitis omnis."
      charQuantity={20}
    />
  );
}

export default App;
