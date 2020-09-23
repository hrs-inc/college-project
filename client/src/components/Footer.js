import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div className='footer'>
      <Link to='#'>
        <i className='fab fa-facebook-f fa-3x'></i>
      </Link>
      <Link to='#'>
        <i className='fab fa-instagram fa-3x'></i>
      </Link>
      <Link to='#'>
        <i className='far fa-envelope fa-3x'></i>
      </Link>
      <Link to='#'>
        <i className='fab fa-linkedin fa-3x'></i>
      </Link>
    </div>
  );
}

export default Footer;
