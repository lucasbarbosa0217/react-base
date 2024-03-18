import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom'; // Importe o Link e Routes
import Registro from './components/Registro';
import Login from './components/Login';
import PostarBlog from './components/PostarBlog';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <nav>
            <ul className="menu">
              <li><Link to="/registro">Registro</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/postar-blog">Postar Blog</Link></li>
            </ul>
          </nav>
        </header>
        <Routes>
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postar-blog" element={<PostarBlog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
