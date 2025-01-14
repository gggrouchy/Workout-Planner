import React from 'react';
import '../App.css';


function ContentBoxes() {
  const weekdays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  return (
    <div className="content-container">
      {weekdays.map((day, index) => (
        <div key={index} className="box-container">
          <span className="box-number">{index + 1}</span>
          <div className="box">
            <h2 className="box-title">{day}</h2>
            <ul className="box-list">
              {[...Array(5)].map((_, i) => (
                <li key={i} className="box-item">{i + 1}.</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ContentBoxes;