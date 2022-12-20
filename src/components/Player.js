function Player(props) {
  const { athlete } = props
  return (
    <div key={athlete.id}>
    <h3>{athlete.firstName} {athlete.lastName}</h3>
    <ul>{athlete.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}</ul>
  </div>
  )
}

export default Player

/*
      <div key={player.id}>
        <h3>{player.firstName} {player.lastName}</h3>
        <ul>{player.hobbies.map((hobby, index) => <li key={index}>{hobby}</li>)}</ul>
      </div>
*/