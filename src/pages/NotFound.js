import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';
import Error from '.././images/err6.gif'

const NotFound = () => {
  return (
    <div className='container text-center'>
      <img src={Error} alt="error" className='error'/>
      
      <h1 className='title mt-5 centered-title'>Page Not Found</h1>
      <p className='desc'>Please go to the Home page</p>

      <Link to='/' className='mt-1'>
      <button className='bt'>Homepage</button>
      </Link>
    </div>
  );
}

export default NotFound;
