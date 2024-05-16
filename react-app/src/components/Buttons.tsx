import React, { useState } from "react";
import Alert from "./Alert";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "danger" | "success";
}

const Buttons = ({ children, color = "primary" }: Props) => {
  const [alertVisible, setAlertVisible] = useState(false);
  return (
    <>
      <div>
        {alertVisible && (
          <Alert onClose={() => setAlertVisible(false)}>
            <strong>Holy guacamole!</strong> You should check in on some of
            those fields below.
          </Alert>
        )}
      </div>
      <button
        className={"btn btn-" + color}
        onClick={() => setAlertVisible(true)}
      >
        {children}
      </button>
    </>
  );
};

export default Buttons;
