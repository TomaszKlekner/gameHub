import { useState } from 'react';
import './listGroup.css';

interface Props {
  items: string[];
  heading: string;
  onSelecItem: (item: string) => void;
}

const ListGroup = ({ items, heading, onSelecItem }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <div className='card' style={{ width: '18rem' }}>
      <div className='card-header'>
        <h1>{heading}</h1>
      </div>
      <ul className='list-group'>
        {items.map((item, index) => (
          <li
            key={index}
            className={
              'list-group-item' + (selectedIndex === index ? ' active' : '')
            }
            onClick={() => {
              setSelectedIndex(index);
              onSelecItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListGroup;
