
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './Todo';
import Login from './Login';



function App() {
  

  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="" />
        <Route element={<Todo />} path='/todo' />
      </Routes>
    </Router>
  );
}

export default App;
