function Favorites({ favs }) {
  // console.log('fav', favs)
  const favList = favs.map((fav, index) => <li key={index}>{fav}</li> )

  const favoriteMessage = favs.length ? 
    (
      <>
        <h2>My Favorites</h2>
        <ol>{favList}</ol>
      </>
    ) : <p>Click a player to add to favorites</p>
    
  return (
    <div>{favoriteMessage}</div> 
  )
}

export default Favorites