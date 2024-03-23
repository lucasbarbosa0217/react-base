import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import Registro from './pages/Registro';
import Login from './pages/Login';
import PostarBlog from './pages/PostarBlog';
import './App.css';
import Header from './components/header/header';
import Footer from './components/footer/footer';


function App() {
  return (
    <Router>


      
     <Header></Header>

        <Routes className="page">
          <Route path="/registro" element={<Registro />} />
          <Route path="/login" element={<Login />} />
          <Route path="/postar-blog" element={<PostarBlog />} />
        </Routes>
    
    <Footer></Footer>

    </Router>
  );
}

export default App;
