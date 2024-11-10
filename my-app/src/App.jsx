// App.js
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import MapContainer from './components/MapContainer';
import Hero from './components/Hero';
import Login from './pages/Login';
import Search from './pages/Search';
import './App.css';

function App() {
  
  return (
    <div>
      <Search />
      {/* <Router>
      <Routes>
        <Route path="/" element={<Search />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router> */}
    </div>
  );
}

export default App;
