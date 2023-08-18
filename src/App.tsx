import { useState } from 'react';

function App() {
  const [pizza, setPizza] = useState({
    name: 'Spicy Pepperoni',
    toppings: ['Mushroom', 'Salami'],
  });

  const handleClick = () => {
    // Add a new topping
    setPizza({ ...pizza, toppings: [...pizza.toppings, 'Tomatoes'] });
  };

  return (
    <div className='container my-5'>
      <h2>Pizza: {pizza.name}</h2>
      <p>Toppings:</p>
      <ul>
        {pizza.toppings.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Add new topping</button>
    </div>
  );
}

export default App;
