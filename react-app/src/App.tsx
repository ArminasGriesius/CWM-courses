import { useEffect, useRef, useState } from "react";
import ProductList from "./components/ProductList";

function App() {
  const connect = () => console.log("Connecting");

  const disconnect = () => console.log("Disconnecting");

  useEffect(() => {
    connect();

    return () => disconnect();
  }, []);
  return <div></div>;
}

export default App;
