import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import './css/tooltip.css';

import Home from './pages/Home';
import Login from './pages/Login';
import CreatePost from './pages/CreatePost';
import AdminPage from './pages/AdminPage';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));

  return (
    <Router>
      <Routes>
      <Route path="/admin" element={<AdminPage isAuth={isAuth} />} />
        <Route path="/home" element={<Home isAuth={isAuth} />} />
        <Route path="/" element={<Login setIsAuth={setIsAuth} />} />
        <Route path="/createpost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
  );
}

export default App;
