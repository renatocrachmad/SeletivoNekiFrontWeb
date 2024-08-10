import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import '../styles/Navbar.css'; 

const Navbar = () => {
  const { logout } = useAuth();

  return (
    <nav className="navbar">
      <ul>
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/profile">Perfil</Link></li>
        <li><button onClick={logout}>Logout</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
