import { useState, useEffect, useContext, createContext, use } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem('favorites');
  
    if (storedFavs) {
      setFavorites(JSON.parse(storedFavs));
    } 
  }, [])

  console.log('Loaded favorites from localStorage:', favorites);
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites])

  const addToFavorites = (movie) => {
    setFavorites((prev) => [...prev, movie]);
  }

  const removeFavorite = (movieId) => {
    setFavorites((prev) => prev.filter(m => m.id !== movieId));
  }

  const isFavorite = (movieId) => {
    return favorites.some(m => m.id === movieId);
  }
  console.log('Current favorites:', favorites);
  const value = {
    favorites,
    addToFavorites,
    removeFavorite,
    isFavorite
  }

  return <MovieContext.Provider value={value}>
    {children}
  </MovieContext.Provider>
}