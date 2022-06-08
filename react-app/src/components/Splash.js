import React, { useEffect, useState } from 'react';
import LoginForm from './auth/LoginForm';
import { Link } from 'react-router-dom';
import SplashPhone from './SplashPhone'
import "./Splash.css"
import SignUpForm from './auth/SignUpForm';

const Splash = props => {

  return (
    <div id='splash-container' className='flex-row'>
      <SplashPhone />
      <div id='login-container' className='flex-column'>
        <div className='splash-div'>
          <h1 className='splash-title'>Finstagram</h1>
          <h2 className='splash-bio'> Share your vision; join the Finstagram community today. </h2>
          <LoginForm />
        </div>
        <div className='bottom-signup'>
          Don't have an account?&nbsp;
          <Link id='sign-up-splash' to='/sign-up' exact={true} className="splash-signup" activeClassName='active'>
            Sign Up
          </Link>
        </div>
      </div>
    </div >
  )
};


export default Splash;
