import Alert from './components/Alert';

function App() {
  let items = ['New York', 'Tokyo', 'Warsaw', 'Paris', 'London'];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div className='container my-5'>
      <Alert>
        <span>Hello World!</span>
      </Alert>
    </div>
  );
}

export default App;
