import { useState } from 'react'
import Welcome from './components/Welcome'
import PlayerList from './components/PlayerList'
import Favorites from './components/Favorites'
import './App.css';


function App() {
  const [favorites, setFavorites] = useState([])

  const handleFavorites = (name) => {
    if (!favorites.includes(name)){
      const updatedFavorites = [...favorites, name]
      setFavorites(updatedFavorites)
    }
  }
  console.log('favs', favorites)

  return (
    <div className="App">
      <Welcome />
      <PlayerList handleFavorites={handleFavorites}/>
      <Favorites favs={favorites}/>
    </div>
  );
}

export default App;
