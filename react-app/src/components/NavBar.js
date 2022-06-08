
import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import "./NavBar.css"

const NavBar = () => {
  const user = useSelector(state => state.session.user)

  return (

    <nav>
      <ul>
        {!user && (
          <>
            <li className='nav-link'>
              <NavLink to='/login' exact={true} activeClassName='active'>
                Login
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to='/sign-up' exact={true} activeClassName='active'>
                Sign Up
              </NavLink>
            </li>
          </>
        )}
        {user && (
          <>
            <li className='nav-link'>
              <NavLink to='/' exact={true} activeClassName='active'>
                Home
              </NavLink>
            </li>
            <li className='nav-link'>
              <NavLink to='/users' exact={true} activeClassName='active'>
                Users
              </NavLink>
            </li>
            <li className='nav-link'>
              <LogoutButton />
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}

export default NavBar;
