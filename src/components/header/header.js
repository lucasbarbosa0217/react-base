import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';
import { ResponsiveNav } from 'react-responsive-nav';


const Header = () => {
    return (
        <header className="App-header" id="header">
            <nav className="menu">
                <div className="logo"><h1>REACT-BASE</h1></div>
                <div className="rotas">
                    <NavLink to="/registro" activeClassName="active" hoverClassName="hover">Registro</NavLink>
                    <NavLink to="/login" activeClassName="active">Login</NavLink>
                    <NavLink to="/postar-blog" activeClassName="active">Postar Blog</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Header;
