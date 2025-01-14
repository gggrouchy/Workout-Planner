import React from 'react';
import { useState } from 'react';
import './App.css';


function App() {
  const [workouts, setWorkouts] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [viewModalActive, setViewModalActive] = useState(false);
  const [deleteModalActive, setDeleteModalActive] = useState(false);
  const [newWorkout, setNewWorkout] = useState({ name: '', days: [], duration: '' });
  const [selectedWorkouts, setSelectedWorkouts] = useState([]);
  
  const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  const addWorkout = () => {
    setWorkouts([...workouts, newWorkout]);
    setNewWorkout({ name: '', days: [], duration: '' });
    setModalActive(false);
  };

  const deleteSelectedWorkouts = () => {
    setWorkouts(workouts.filter(workout => !selectedWorkouts.includes(workout)));
    setSelectedWorkouts([]);
    setDeleteModalActive(false);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="navbar-title">WORKOUT PLANNER</div>
        <div className="navbar-menu">
          <button className="button is-success" onClick={() => setModalActive(true)}>Add Workout</button>
          <button className="button is-danger" onClick={() => setDeleteModalActive(true)}>Delete Workouts</button>
          <button className="button is-info" onClick={() => setViewModalActive(true)}>View Workouts</button>
        </div>
      </nav>
      <div className="content-container">
        {weekdays.map(day => (
          <div key={day} className="box-container">
            <div className="box">
              <div className="box-title">{day}</div>
              <ul className="box-list">
                {workouts.filter(workout => workout.days.includes(day)).map((workout, index) => (
                  <li key={index} className="box-item">
                    {workout.name} - {workout.duration} min
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
      {modalActive && (
        <div className="add-workout-modal active">
          <h2>Add Workout</h2>
          <input type="text" className="input" placeholder="Workout Name" value={newWorkout.name} onChange={(e) => setNewWorkout({ ...newWorkout, name: e.target.value })} />
          <input type="text" className="input" placeholder="Duration (min)" value={newWorkout.duration} onChange={(e) => setNewWorkout({ ...newWorkout, duration: e.target.value })} />
          <div className="weekday-selection">
            {weekdays.map(day => (
              <label key={day} className="weekday-label">
                <input type="checkbox" onChange={(e) => {
                  const updatedDays = e.target.checked
                    ? [...newWorkout.days, day]
                    : newWorkout.days.filter(d => d !== day);
                  setNewWorkout({ ...newWorkout, days: updatedDays });
                }} />
                {day}
              </label>
            ))}
          </div>
          <button className="button is-success" onClick={addWorkout}>Save Workout</button>
          <button className="button is-light" onClick={() => setModalActive(false)}>Cancel</button>
        </div>
      )}
      {deleteModalActive && (
        <div className="delete-workout-modal active">
          <h2>Delete Workouts</h2>
          <ul>
            {workouts.map((workout, index) => (
              <li key={index}>
                <label>
                  <input type="checkbox" onChange={(e) => {
                    const updatedSelection = e.target.checked
                      ? [...selectedWorkouts, workout]
                      : selectedWorkouts.filter(w => w !== workout);
                    setSelectedWorkouts(updatedSelection);
                  }} />
                  {workout.name} - {workout.duration} min
                </label>
              </li>
            ))}
          </ul>
          <button className="button is-danger" onClick={deleteSelectedWorkouts}>Delete Selected</button>
          <button className="button is-light" onClick={() => setDeleteModalActive(false)}>Cancel</button>
        </div>
      )}
      {viewModalActive && (
        <div className="view-workout-modal active">
          <h2>Workout Schedule</h2>
          <table className="table is-fullwidth">
            <thead>
              <tr>
                <th>Workout</th>
                <th>Duration (min)</th>
                <th>Days</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map((workout, index) => (
                <tr key={index}>
                  <td>{workout.name}</td>
                  <td>{workout.duration}</td>
                  <td>{workout.days.join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="button is-light" onClick={() => setViewModalActive(false)}>Close</button>
        </div>
      )}
    </div>
  );
}

export default App;
