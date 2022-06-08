import React, { useEffect, useState } from 'react';
import LoginForm from './auth/LoginForm';
import { Link } from 'react-router-dom';
import "./Splash.css"

const Splash = props => {
  // const images = [
  //   'https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png',
  //   'https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png',
  //   'https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png',
  //   'https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png'
  // ]
  const [imgNum, setImgNum] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setImgNum(prevNum => ++prevNum % 4)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div id='splash-container' className='flex-row'>
      <div id='splash-image-container'>
        {/* <img id='phone-image-1' className='phone-image' src={images[imgNum]} alt='' /> */}
        {/* <img id='hidden' className='phone-image' src={images[imgNum + 1]} alt='' /> */}
        {/* <img id={0 === imgNum && 'ease-in'} className='hidden' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png' alt='' /> */}
        <img id={0 === imgNum ? 'ease-in' : 'ease-out'} className='phone-image hidden' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot1.png/fdfe239b7c9f.png' alt='' />
        <img id={1 === imgNum ? 'ease-in' : 'ease-out'} className='phone-image hidden' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot2.png/4d62acb667fb.png' alt='' />
        <img id={2 === imgNum ? 'ease-in' : 'ease-out'} className='phone-image hidden' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot3.png/94edb770accf.png' alt='' />
        <img id={3 === imgNum ? 'ease-in' : 'ease-out'} className='phone-image hidden' src='https://www.instagram.com/static/images/homepage/screenshots/screenshot4.png/a4fd825e3d49.png' alt='' />
      </div>
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
