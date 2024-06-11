import { useState } from "react";

interface Props {
  text: string;
  charQuantity: number;
}

const ExpandableText = ({ text, charQuantity }: Props) => {
  const [showMore, setShowMore] = useState(true);
  function showChars() {
    setShowMore(!showMore);
  }

  return (
    <>
      <p>
        {showMore ? text : `${text.substring(0, charQuantity)}`}
        <button onClick={showChars}>{showMore ? "less" : "more"}</button>
      </p>
    </>
  );
};
export default ExpandableText;
