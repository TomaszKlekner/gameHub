import { useState } from 'react';

function App() {
  const [tags, setTags] = useState(['happy', 'cheerful']);

  // Nested Objects should be treated as immutable or read-only
  // Use the spread operator to copy all of the fields
  // The spread operator creates a shallow copy
  const handleClick = () => {
    // Add a new item to the array
    setTags([...tags, 'exciting']);

    // Remove
    setTags(tags.filter((tag) => tag !== 'happy'));

    // Update
    setTags(tags.map((tag) => (tag === 'happy' ? 'happyness' : tag)));
  };

  return (
    <div className='container my-5'>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
