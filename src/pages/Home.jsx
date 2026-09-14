import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css';
import { useQuery } from "@tanstack/react-query";
import { searchMovies, getPopularMovies } from "../services/api";

function Home(){
  const [searchQuery, setSearchQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");

  const {
    data: popularMovies = [],
    isLoading: popularLoading,
    isError: popularError,
  } = useQuery({
    queryKey: ["popularMovies"],
    queryFn: getPopularMovies,
  });

  const {
    data: searchResults = [],
    isLoading: searchLoading,
    isError: searchError,
  } = useQuery({
    queryKey: ["searchMovies", submittedQuery],
    queryFn: () => searchMovies(submittedQuery),
    enabled: submittedQuery.trim() !== "",
  });


  const movies = submittedQuery ? searchResults : popularMovies;
  const isLoading = submittedQuery ? searchLoading : popularLoading;
  const isError = submittedQuery ? searchError : popularError;

  const handleSearch = (e) =>{
    e.preventDefault();
    if(searchQuery.trim() === "") return;

    setSubmittedQuery(searchQuery.trim());
  }

  return(
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input
          className="search-input"
          type="text"
          placeholder="Search for a movie..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button type="submit" className="search-button">Search</button>
        {searchQuery && (
          <button
            type="button"
            className="clear-button"
            onClick={() => {
              setSearchQuery("");
              setSubmittedQuery("");
            }}
          >
            Clear
          </button>
        )}
      </form>

      {isLoading ? (
        <div className="loading">Loading...</div>
      ) : (
      <div className="movies-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
      )}
    </div>

  )
}

export default Home;