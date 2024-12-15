import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (

<nav className="navbar">
  <div className='navbar-left'>
  <Link to="/Home" className="pageName">BigMouse Cheese Co.</Link>
    </div>

  <div className="navbar-right">
    <ul className="nav-links">
        <li><Link to="/Home">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contacts">Contact</Link></li>
    </ul>
  </div>  
</nav>
);
};

export default Navbar;