import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import LoginForm from './auth/LoginForm';
import SignUpForm from './auth/SignUpForm';
import { NavLink } from 'react-router-dom';
import "./Splash.css"
import { login } from '../store/session';

const Splash = props => {
  const dispatch = useDispatch()

  return (
    <>
      <div className='splash-div'>
        <h1 className='splash-title'>Finstagram</h1>
        <h2 className='splash-bio'> Share your vision, join the Finstagram community today. </h2>
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
