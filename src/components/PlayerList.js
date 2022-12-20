import Player from '../components/Player'

import { playerData } from '../data/playerData'

function PlayerList() {
  const list = playerData.map(player => {
    return (
      <Player athlete={player} />
    )
  })

  return (
    <div className="player-list">{list}</div>
  )
}

export default PlayerList