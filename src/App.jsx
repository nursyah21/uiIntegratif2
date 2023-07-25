import React, { useEffect, useState } from 'react';
import {
  Routes,
  Route,
  useLocation
} from 'react-router-dom';

import './css/style.css';

import './charts/ChartjsConfig';

// Import pages
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  const token = JSON.parse(localStorage.getItem('token'));
  const location = useLocation();
  
  // if (!token){
  //   return <Login />
  // }

  return (
    <>
      <Routes>
        <Route exact path="/" element={token ?<Dashboard token={token} /> : <Login />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
