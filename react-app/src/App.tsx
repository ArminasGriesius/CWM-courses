import { useState } from "react";
import ExpandableText from "./components/ExpandableText.jsx/ExpandableText";
import { AiFillDingtalkCircle } from "react-icons/ai";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      city: "Vilnius",
      zipCode: 255101,
    },
  });
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, city: "Kaunas" },
    });
    console.log(customer);
  };
  return <button onClick={handleClick}>ClickMe</button>;
}

export default App;
