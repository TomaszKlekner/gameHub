import { useState } from 'react';

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: 'John',
    },
  });

  const handleClick = () => {
    // Update player name
    setGame({ ...game, player: { ...game.player, name: 'Tony' } });
  };

  return (
    <div className='container my-5'>
      <h2>Player details</h2>
      <ul>
        <li>{game.id}</li>
        <li>{game.player.name}</li>
      </ul>
      <button onClick={handleClick}>Update Player Name</button>
    </div>
  );
}

export default App;
