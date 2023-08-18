import { useState } from 'react';
import Navbar from './components/Navbar';
import Cart from './components/Cart';

function App() {
  const [cartItems, setCartItems] = useState(['Product 1', 'Product 2']);

  return (
    <div className='container my-5'>
      <Navbar cartItemsCount={cartItems.length} />
      <Cart onClear={() => setCartItems([])} cartItems={cartItems} />
    </div>
  );
}

export default App;
