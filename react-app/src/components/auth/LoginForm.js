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
      setErrors(data);
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

  if (user) {
    return <Redirect to='/photos' />;
  }

  return (
    <>
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div className='form-element'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='text'
            placeholder='Email'
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div className='form-element'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            placeholder='Password'
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div className='form-buttons'>
          <button className='login-button' id='form-submit' type='submit'>Login</button>
          <button className='demo-button' id='form-submit' onClick={handleDemoLogin}>Demo Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
