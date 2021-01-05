import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCar } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import { IconContext } from 'react-icons/lib';
import Signout from '../components/Auth/Signout';

import './Navbar.css';

const Navbar = ({ session }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
          <div className='navbar-container'>
            <NavLink
              to='/'
              exact
              className='navbar-logo'
              onClick={closeMobileMenu}
            >
              Easy Car <AiOutlineCar />
            </NavLink>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              {session && session.authUserProfile.role === 'admin' && (
                <li className='nav-item'>
                  <NavLink
                    to='/create'
                    className='nav-links'
                    onClick={closeMobileMenu}
                  >
                    Create
                  </NavLink>
                </li>
              )}

              <li className='nav-item'>
                <NavLink
                  to='/service'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Services
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Products
                </NavLink>
              </li>
              <li className='nav-item'>
                <NavLink
                  to='/signin'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  Signin
                </NavLink>
              </li>

              <li>
                {session && session.authUserProfile ? (
                  <Signout closeMobileMenu={closeMobileMenu} />
                ) : (
                  <NavLink
                    to='/signup'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                  >
                    Signup
                  </NavLink>
                )}
              </li>
            </ul>
            {button && (
              <Button buttonStyle='btn--outline' session={session}>
                {session && session.authUserProfile ? 'sign out' : 'sign up'}
              </Button>
            )}
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
};

export default Navbar;
