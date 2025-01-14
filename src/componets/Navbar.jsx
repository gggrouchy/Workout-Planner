import React from 'react';
import '../App.css';


function Navbar() {
  return (
    <nav className="navbar is-dark is-fixed-top">
      <div className="container navbar-container">
        <h1 className="navbar-title">Workout Planner</h1>
        <ul className="navbar-menu">
          <li className="navbar-item"><a href="#" className="button is-primary is-rounded">Add Workout</a></li>
          <li className="navbar-item"><a href="#" className="button is-danger is-rounded">Delete Workout</a></li>
          <li className="navbar-item"><a href="#" className="button is-info is-rounded">View Workouts</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;