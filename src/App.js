import React,{ useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './pages/LandingPage';
import MovieDetailPage from './pages/MovieDetailPage';
import MovieSearchPage from './pages/MovieSearchPage';
;

function App() {

  const [query, setQuery] = useState('');

  const handleSearch = (query) => {
    setQuery(query);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/search" element= {<MovieSearchPage query={query} onSearch={handleSearch} />} />
        <Route path="/movie/:id" element={<MovieDetailPage />} />
      </Routes>
    </div>
  );
}

export default App;
