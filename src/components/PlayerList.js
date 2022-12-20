import Player from '../components/Player'

import { playerData } from '../data/playerData'

function PlayerList({ handleFavorites }) {
  const list = playerData.map(player => {
    return (
      <Player 
        athlete={player} 
        handleFavorites={handleFavorites}
      />
    )
  })

  return (
    <div className="player-list">{list}</div>
  )
}

export default PlayerList