import { useState } from 'react';

function App() {
  const [cart, setCart] = useState({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: 'Product 1',
        quantity: 1,
      },
      {
        id: 2,
        title: 'Product 2',
        quantity: 1,
      },
    ],
  });

  const handleClick = () => {
    // Update product 1 quantity to 2
    setCart({
      ...cart,
      items: cart.items.map((item) =>
        item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
      ),
    });
  };

  return (
    <div className='container my-5'>
      <h2>Shopping Cart</h2>
      <p>Discount: {cart.discount}</p>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.id}: {item.title} - Q: {item.quantity}
          </li>
        ))}
      </ul>
      <button onClick={handleClick}>Update Product</button>
    </div>
  );
}

export default App;
