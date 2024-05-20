import { useState } from "react";
import "./ListGroup.css";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  background: yellow;
`;

interface ListItemProps {
  active: boolean;
}

const ListItems = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface Props {
  items: string[];
  heading: string;
  // (item: string) => void
  onSelectItem: (item: string) => void; //onClick
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //hook
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{heading}</h1>
      {/* {items.length === 0 ? <p>No items found</p> : null} */}
      {items.length === 0 && <p> No items found</p>}
      <List>
        {items.map((item, index) => (
          <ListItems
            active={index === selectedIndex}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </ListItems>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
