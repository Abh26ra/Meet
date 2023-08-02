import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';


const Navigation = () => {
  return (
    <div>
      <nav className='navbar'>
        <h3>
          <Link className='logo' to='/'>
          <img src="/images/logo1.png" alt="Logo" />
          </Link>
        </h3>
        <ul className='nav'>
          <li><Link className='nav-link' to="/">Home</Link></li>
          <li><Link className='nav-link' to="/add">Add Meeting</Link></li>
          <li><Link className='nav-link' to="/old">Old Meeting</Link></li>
        

         
        </ul>
      </nav>
    </div>
  );
}

export default Navigation;
