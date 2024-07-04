import React from 'react';
import SearchBar from '../components/SearchBar';
import '../styles/LandingPage.css';

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="hero">
        <p id="hero1">What movie</p>
        <p id="hero2">are you looking for?</p>
        </div>
      <SearchBar/>
    </div>
  );
} 

export default LandingPage;
