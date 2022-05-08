import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';

import './userlist.css'

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);


  const userComponents = users.map((user) => {
    return (
      <li key={user.id} className='users'>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </li>
    );
  });

  return (
    <>
      <div id='user-list-container'>
        <h1>User List: </h1>
        <ul>{userComponents}</ul>
      </div>
    </>
  );
}

export default UsersList;
