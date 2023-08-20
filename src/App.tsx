import { useEffect, useRef } from 'react';

function App() {
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (ref.current) ref.current.focus();
  }, []);

  return (
    <div className='container my-5'>
      <label htmlFor='' className='form-label'>
        Example text
      </label>
      <input type='text' className='form-control' ref={ref} />
    </div>
  );
}

export default App;
