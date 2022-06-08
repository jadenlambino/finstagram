import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SplashPhone from './SplashPhone'
import SignUpForm from './auth/SignUpForm';
import "./Splash.css"

export default function SignUpPage() {

  return (
    <div id='splash-container' className='flex-row'>
      <SplashPhone />
      <div id='login-container' className='flex-column'>
        <div className='sign-up-div'>
          <h1 className='splash-title'>Finstagram</h1>
          <h2 className='splash-bio'> Share your vision; join the Finstagram community today. </h2>
          <SignUpForm />
        </div>
        <div className='bottom-signup'>
          Have an account?&nbsp;
          <Link id='sign-up-splash' to='/' exact={true} className="splash-signup" activeClassName='active'>
            Log In
          </Link>
        </div>
      </div>
    </div >
  )
};