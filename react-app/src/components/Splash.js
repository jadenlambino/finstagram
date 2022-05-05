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
      <h1> Welcome to Finstagram</h1>
      <LoginForm />

      don't have an account?&nbsp;

      <NavLink to='/sign-up' exact={true} className="splash-signup" activeClassName='active'>
        Sign Up
      </NavLink>
    </>
  )
};


export default Splash;
