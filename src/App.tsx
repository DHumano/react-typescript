import React from 'react';
import { Routes, Route } from 'react-router-dom'; // , Link
import Home from 'components/home/Home';
import './App.css';

const App = () => (
  <div className="App">
    <h1>Welcome to React Router!</h1>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
