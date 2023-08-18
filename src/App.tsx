import { useState } from 'react';

function App() {
  const [bugs, setBugs] = useState([
    {
      id: 1,
      title: 'Bug 1',
      fixed: false,
    },
    {
      id: 2,
      title: 'Bug 2',
      fixed: false,
    },
  ]);

  const handleClick = () => {
    // Mark first bug as fixed
    setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  };

  return (
    <div className='container my-5'>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
