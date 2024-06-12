import { useState } from "react";

interface Props {
  children: string;
  charQuantity?: number;
}

const ExpandableText = ({ children, charQuantity = 20 }: Props) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <>
      <p>
        {showMore || children.length < charQuantity
          ? children
          : `${children.substring(0, charQuantity)}...`}
        {children.length > charQuantity ? (
          <button
            onClick={() => {
              setShowMore(!showMore);
            }}
          >
            {showMore ? "less" : "more"}
          </button>
        ) : (
          ""
        )}
      </p>
    </>
  );
};
export default ExpandableText;
