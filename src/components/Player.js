function Player(props) {
  const { athlete, handleFavorites } = props
  const hobbiesList = athlete.hobbies.length 
                      ? athlete.hobbies.map((hobby, index) => <li>{hobby}</li>)
                      : <p>No hobbies</p>
  return (
    <div key={athlete.id}>
      <h3 onClick={() => handleFavorites(athlete.firstName)}>{athlete.firstName} {athlete.lastName}</h3>
      <ul>{hobbiesList}</ul>
  </div>
  )
}

export default Player
