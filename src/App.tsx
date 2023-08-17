import Like from './components/Like';

function App() {
  return (
    <div className='container my-5'>
      <Like onClick={() => console.log('Liked')} color='red' size='30' />
    </div>
  );
}

export default App;
