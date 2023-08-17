import { useState } from 'react';
import './listGroup.css';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${({ active }) => (active ? 'lightblue' : '')};
`;

interface Props {
  items: string[];
  heading: string;
  onSelecItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelecItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <div className='card' style={{ width: '18rem' }}>
      <div className='card-header'>
        <h1>{heading}</h1>
      </div>
      <List>
        {items.map((item, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelecItem(item);
            }}
          >
            {item}
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default ListGroup;
