// App.js
import React from 'react';
import Navbar from './components/Navbar';
import MapContainer from './components/MapContainer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <MapContainer />
    </div>
  );
}

export default App;
