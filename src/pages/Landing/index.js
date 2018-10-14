import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const Landing = () => {
  return (
    <main id="landing-page" className="dropdown content">
      <div className="overlay" />
      <div className="wrapper">
        <h2 className="welcome-title">Welcome</h2>
        <p className="welcome-message">
          Ride My Way is an app that lets you find a ride going your way or
          Create one and get others to their destination
        </p>

        <Link to="/login">
          <button className="button button-blue">GET STARTED</button>
        </Link>
      </div>
    </main>
  );
};

export default Landing;
