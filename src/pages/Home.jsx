import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import '../css/Home.css';
import { searchMovies, getPopularMovies } from "../services/api";

function Home(){
  const [searchQuery, setSearchQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  const handleSearch = (e) =>{
    e.preventDefault();
    alert(searchQuery);
  }

  return(
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
      </form>

      {error && <div className="error-message">{error}</div>}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}

export default Home;