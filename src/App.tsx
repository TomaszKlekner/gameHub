import { useState } from 'react';

function App() {
  const [customer, setCustomer] = useState({
    name: 'John',
    address: {
      city: 'San Francisco',
      zipCode: 94111,
    },
  });

  // Nested Objects should be treated as immutable or read-only
  // Use the spread operator to copy all of the fields
  // The spread operator creates a shallow copy
  const handleClick = () => {
    setCustomer({
      ...customer,
      address: { ...customer.address, zipCode: 94112 },
    });
  };

  return (
    <div className='container my-5'>
      <h1>Customer</h1>
      <ul>
        <li>{customer.name}</li>
        <li>{customer.address.city}</li>
        <li>{customer.address.zipCode}</li>
      </ul>

      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
