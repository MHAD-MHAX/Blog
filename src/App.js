import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Correct import for BrowserRouter
import './App.css';
import './index.css';


import Home from "./pages/Home";
import Medic from "./pages/Medic";
import Car from "./pages/Car";
import Phone from "./pages/Phone";






function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/health" element={<Medic />} />
          <Route path="/auto" element={<Car />} />
          <Route path="/tech" element={<Phone />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;