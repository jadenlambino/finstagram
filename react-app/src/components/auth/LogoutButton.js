import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import { useHistory } from 'react-router-dom';
import clearStore from '../../store/users';

const LogoutButton = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const onLogout = async (e) => {
    history.push("/")
    await dispatch(logout());
    await dispatch(clearStore())
  };

  return <button onClick={onLogout}>Logout</button>;
};

export default LogoutButton;
