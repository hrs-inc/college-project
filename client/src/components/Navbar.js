import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlineCar } from 'react-icons/ai';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Button } from './Button';
import { IconContext } from 'react-icons/lib';
import Signout from '../components/Auth/Signout';

import './Navbar.css';

const Navbar = ({ session }) => (
  <nav>
    {session && session.authUserProfile ? (
      <NavbarAuth session={session} />
    ) : (
      <NavbarUnAuth />
    )}
  </nav>
);

const NavbarAuth = ({ session }) => (
  <>
    <ul>
      <li>
        <NavLink to='/' exact>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to='/search'>Search</NavLink>
      </li>
      <li>
        <NavLink to='/recipe/add'>Add Recipe</NavLink>
      </li>
      <li>
        <NavLink to='/profile'>Profile</NavLink>
      </li>
      <li>
        <Signout />
      </li>
    </ul>
    <h4>
      Welcome,<strong> {session.authUserProfile.username}</strong>
    </h4>
  </>
);

const NavbarUnAuth = () => (
  <ul>
    <li>
      <NavLink to='/' exact>
        Home
      </NavLink>
    </li>
    <li>
      <NavLink to='/search'>Search</NavLink>
    </li>
    <li>
      <NavLink to='/signin'>Signin</NavLink>
    </li>
    <li>
      <NavLink to='/signup'>Signup</NavLink>
    </li>
  </ul>
);

/*
const NavbarAuth = ({ session }) => {
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
              <li className='nav-item'>
                <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
                  Home
                </NavLink>
              </li>
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
     <h1>Welcome {session.authUserProfile.username}</h1>
    </>
  );
};

*/

// const NavbarUnAuth = () => {
//   const [click, setClick] = useState(false);
//   const [button, setButton] = useState(true);

//   const handleClick = () => setClick(!click);
//   const closeMobileMenu = () => setClick(false);

//   const showButton = () => {
//     if (window.innerWidth <= 960) {
//       setButton(false);
//     } else {
//       setButton(true);
//     }
//   };

//   window.addEventListener('resize', showButton);

//   return (
//     <>
//       <IconContext.Provider value={{ color: '#fff' }}>
//         <div className='navbar'>
//           <div className='navbar-container'>
//             <NavLink
//               to='/'
//               exact
//               className='navbar-logo'
//               onClick={closeMobileMenu}
//             >
//               EasyCar <AiOutlineCar />
//             </NavLink>
//             <div className='menu-icon' onClick={handleClick}>
//               {click ? <FaTimes /> : <FaBars />}
//             </div>
//             <ul className={click ? 'nav-menu active' : 'nav-menu'}>
//               <li className='nav-item'>
//                 <NavLink to='/' className='nav-links' onClick={closeMobileMenu}>
//                   Home
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink
//                   to='/services'
//                   className='nav-links'
//                   onClick={closeMobileMenu}
//                 >
//                   Services
//                 </NavLink>
//               </li>
//               <li className='nav-item'>
//                 <NavLink
//                   to='/products'
//                   className='nav-links'
//                   onClick={closeMobileMenu}
//                 >
//                   Products
//                 </NavLink>
//               </li>

//               <li>
//                 <NavLink
//                   to='/signup'
//                   className='nav-links-mobile'
//                   onClick={closeMobileMenu}
//                 >
//                   Sign Up
//                 </NavLink>
//               </li>
//             </ul>
//             {button && <Button buttonStyle='btn--outline'>SIGN UP</Button>}
//           </div>
//         </div>
//       </IconContext.Provider>
//     </>
//   );
// };

export default Navbar;
