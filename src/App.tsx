import { useState } from 'react';
import ProductList from './components/ProductList';

function App() {
  const [category, setCategory] = useState('');

  return (
    <div className='container my-5'>
      <select
        name=''
        id=''
        className='form-select'
        onChange={(e) => setCategory(e.target.value)}
      >
        <option value=''>Select a category</option>
        <option value='Clothing'>Clothing</option>
        <option value='Household'>Household</option>
      </select>

      <hr />

      <ProductList category={category} />
    </div>
  );
}

export default App;
