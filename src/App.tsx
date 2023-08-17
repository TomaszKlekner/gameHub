import { useState } from 'react';

function App() {
  const [isVisible, setIsVisiblility] = useState(false);

  const handleClick = () => {
    setIsVisiblility(true);
    console.log('isVisible: ', isVisible);
  };

  return (
    <div className='container my-5'>
      <button type='button' onClick={handleClick}>
        Show
      </button>
    </div>
  );
}

export default App;
