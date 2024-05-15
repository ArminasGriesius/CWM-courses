import React from "react";

interface Props {
  children: string;
  onClick: () => void;
  color?: "primary" | "secondary" | "danger" | "success";
}

const Buttons = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClick}>
      {children}
    </button>
  );
};

export default Buttons;

// const buttonsArr = ["Primary", "Secondary", "Success", "Danger", "Warning", "Info", "Light", "Dark", "Link"]
