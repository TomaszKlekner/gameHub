import { useState } from 'react';
import Alert from './components/Alert';
import Button from './components/Button';

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className='container my-5'>
      {isVisible && (
        <Alert onClose={() => setIsVisible(false)}>
          <strong>Holy guacamole!</strong> You should check in on some of those
        </Alert>
      )}

      <Button onClick={() => setIsVisible(true)}>Show Alert</Button>
    </div>
  );
}

export default App;
