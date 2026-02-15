import './App.css'
import MovieCard from './components/MovieCard';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {

  return (
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favorites" element={<div className="favorites-page">Favorites Page</div>} />
      </Routes>
    </main>
  )
}

export default App
