import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';
import { NavLink } from 'react-router-dom';
import "./Splash.css"

const Splash = props => {
  return (
    <>
      <div className='splash-div'>
      <h1 className='splash-title'> Welcome to Finstagram</h1>
      <LoginForm />
      <div className='bottom-signup'>
      Don't have an account?&nbsp;
      <NavLink to='/sign-up' exact={true} className="splash-signup" activeClassName='active'>
        Sign Up
      </NavLink>
      </div>
      </div>
    </>
  )
};


export default Splash;
