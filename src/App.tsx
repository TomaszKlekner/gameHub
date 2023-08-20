import { useEffect } from 'react';

const connect = () => console.log('Connecting...');
const disconnect = () => console.log('Disconnect...');

function App() {
  useEffect(() => {
    connect();

    // Cleanup function
    return () => disconnect();
  });

  return (
    <div className='container my-5'>
      <h1>Home Page</h1>
    </div>
  );
}

export default App;
