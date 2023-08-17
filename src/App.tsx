import { useState } from 'react';

function App() {
  // const [firstName, setFirstName] = useState('');
  // const [lastName, setLastName] = useState('');

  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className='container my-5'>
      {person.firstName}: {person.lastName}
    </div>
  );
}

export default App;
