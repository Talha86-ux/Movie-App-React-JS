import '../css/Favorites.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorites() {
  const { favorites } = useMovieContext();

  if (favorites.length > 0) {
    return <div className="favorites">
      <h2>Your Favorites</h2>
      <div className="favorites-grid">
        {favorites.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  }
  return <div className="favorites-empty">
    <h2>No Favorites added yet</h2>
  </div>
}

export default Favorites;