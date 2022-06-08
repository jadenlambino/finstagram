import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';
import About from '../About';
import '../forms.css'

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(firstName, lastName, username, email, password));
      // console.log('=========ERRORS', data)
      if (data) {
        setErrors(data)
      }
    } else {
      setErrors(['Passwords must match'])
    }
  };

  const updateFirstName = (e) => setFirstName(e.target.value)

  const updateLastName = e => setLastName(e.target.value)

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/photos' />;
  }

  return (
    <form onSubmit={onSignUp} className='ls-form'>
      <div>
        {errors.map((error, ind) => (
          <div key={ind} className="sign-up-error">{error}</div>
        ))}
      </div>
      <div className='form-element'>
        <input
          className='sign-up-input'
          type='text'
          name='firstname'
          placeholder='First Name'
          onChange={updateFirstName}
          value={firstName}
        >
        </input>
      </div>
      <div className='form-element'>
        <input
          className='sign-up-input'
          type='text'
          name='firstname'
          placeholder='Last Name'
          onChange={updateLastName}
          value={lastName}
        >
        </input>
      </div>
      <div className='form-element'>
        <input
          className='sign-up-input'
          type='text'
          name='username'
          placeholder='Username'
          onChange={updateUsername}
          value={username}
        ></input>
      </div>
      <div className='form-element'>
        <input
          className='sign-up-input'
          type='text'
          name='email'
          placeholder='Email'
          onChange={updateEmail}
          value={email}
        ></input>
      </div>
      <div className='form-element'>
        <input
          className='sign-up-input'
          type='password'
          name='password'
          placeholder='Password'
          onChange={updatePassword}
          value={password}
        ></input>
      </div>
      <div className='form-element'>
        <input
          className='sign-up-input'
          type='password'
          name='repeat_password'
          placeholder='Confirm Password'
          onChange={updateRepeatPassword}
          value={repeatPassword}
        ></input>
      </div>
      {firstName && lastName && username && email && password && repeatPassword ?
        <button className='form-submit' id='form-submit' type='submit'>Sign Up</button>
        :
        <button id='login-button' className='form-submit disabled-button' disabled='true' type='submit'>Sign Up</button>
      }
    </form>
  );
};

export default SignUpForm;
