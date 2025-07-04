import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../assets/background.jpg';
import './LandingPage.css';

export default function LandingPage() {
  return (
    <section
      className="landing"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="overlay">
        <h1>PlantNest</h1>
        <p>Bringing nature indoors, one plant at a time.</p>
        <Link to="/products">
          <button>Get Started →</button>
        </Link>
      </div>
    </section>
  );
}
