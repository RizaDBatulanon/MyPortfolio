import React from 'react';
import { Link } from 'react-router-dom';
import './app.css'; // Import the styles

const Home = () => {
  return (
    <div className="container">
      <nav className="home-navigation">
        <div className="name">Riza Dogoy Batulanon</div>
        <ul>
          <li><Link to="/about">About Me</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="background-image">
        <div className="welcome-message">
          <h1>Welcome to My Simple Life !</h1>
          <p className="description">
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;