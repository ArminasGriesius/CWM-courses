import { useState } from "react";
import Buttons from "./components/Buttons/Buttons";
import Like from "./components/Like/Like";
import Message from "./components/Message/Message";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "San Francisco",
      zipCode: 9411,
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return <div></div>;
}

export default App;
