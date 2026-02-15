function MovieCard({movie}) {

  function onFavoriteClick() {
    console.log('Favorite clicked for', movie.title)
  }
  return <div className="movie-card">
    <div className="movie-poster">
      <img src={movie.poster} alt={movie.title} />
      <div className="movie-overlay">
        <button className="favorite-btn" onClick={onFavoriteClick}>
          Heart
        </button>
      </div>
    </div>
    <div className="movie-info">
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
    </div>
  </div>
}

export default MovieCard