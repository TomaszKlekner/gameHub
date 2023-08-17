import ListGroup from './components/ListGroup';

function App() {
  let items = ['New York', 'Tokyo', 'Warsaw', 'Paris', 'London'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className='container my-5'>
      <ListGroup
        items={items}
        heading='Cities'
        onSelecItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
