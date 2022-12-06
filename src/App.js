
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Todo from './Todo';
import Login from './Login';
import Api from './Api';



function App() {
  

  return (
    <Router>
      <Routes>
        <Route element={<Login />} path="" />
        <Route element={<Todo />} path='/todo' />
        <Route element={<Api />} path='/api' />
      </Routes>
    </Router>
  );
}

export default App;
