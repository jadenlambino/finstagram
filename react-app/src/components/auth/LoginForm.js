import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { grabLikes } from '../../store/like';
import { grabFollows } from '../../store/follows';
import { login } from '../../store/session';
import '../forms.css'
import About from '../About';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    // await dispatch(grabLikes())
    // await dispatch(grabFollows());
    if (data) {
      setErrors(['The information you entered is incorrect']);
    } else {
      await dispatch(grabLikes())
      await dispatch(grabFollows());
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleDemoLogin = async (e) => {
    e.preventDefault()

    await dispatch(login('demo@aa.io', 'password'))
    await dispatch(grabLikes())
    await dispatch(grabFollows());
  }

  // if (user) {
  //   return <Redirect to='/photos' />;
  // }

  return (
    <>
      <form className='ls-form' onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind} className='error'>{error}</div>
          ))}
        </div>
        <div >
          {/* <label htmlFor='email'>Email</label> */}
          <input
            className='login-input'
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div >
          {/* <label htmlFor='password'>Password</label> */}
          <input
            className='login-input'
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        {/* <div className='form-buttons'> */}
        {email && password ?
          <button id='login-button' className='form-submit' type='submit'>Log In</button>
          :
          <button id='login-button' className='form-submit disabled-button' disabled='true' type='submit'>Log In</button>
        }
        <div id='divider-div' className='flex-row'>
          <div className='divider'></div>
          <div id='or'>OR</div>
          <div className='divider'></div>
        </div>
        <button id='demo-button' className='form-submit' onClick={handleDemoLogin}>Demo User</button>
        {/* </div> */}
      </form>
    </>
  );
};

export default LoginForm;
