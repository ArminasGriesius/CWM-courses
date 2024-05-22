import { AiFillHeart } from "react-icons/ai";
import css from "./Like.module.css";
import { useState } from "react";

interface LikeProps {
  onClick: () => void;
}

function Like({ onClick }: LikeProps) {
  const [heartClicked, setHeartClicked] = useState(false);
  const handleClick = () => {
    setHeartClicked(!heartClicked);
    onClick();
  };

  return (
    <div>
      <AiFillHeart
        color={heartClicked ? "red" : "green"}
        size={50}
        onClick={handleClick}
      />
    </div>
  );
}
export default Like;
