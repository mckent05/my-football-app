import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';
import { getLeagues } from './Redux/HomePage/Home';
import HomePage from './Components/Pages/HomePage/HomePage';
import StandingPage from './Components/Pages/StandingPage/StandingPage';
import './App.css';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLeagues());
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/StandingPage/:id" element={<StandingPage />} />
      </Routes>
    </div>
  );
};

export default App;
