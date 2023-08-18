import { useState } from 'react';

function App() {
  const [drink, setDrink] = useState({
    title: 'Americano',
    price: 5,
  });

  // Arrays should be treated as immutable or read-only
  // Use the spread operator to copy all of the fields
  const handleClick = () => {
    setDrink({ ...drink, price: 6 });
  };

  return (
    <div className='container my-5'>
      <button onClick={handleClick}>Click Me</button>
      <p>Drink Price: {drink.price}</p>
    </div>
  );
}

export default App;
