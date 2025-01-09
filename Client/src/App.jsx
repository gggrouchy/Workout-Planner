import React from 'react';
import './App.css';
import Navbar from './componets/Navbar';
import ContentBoxes from './componets/ContenBoxes';


function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ContentBoxes /> 
    </div>
  );
}

export default App;