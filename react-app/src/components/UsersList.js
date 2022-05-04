import React, { useEffect, useState } from 'react';
import { useDispatch } from "react-redux";
import { NavLink } from 'react-router-dom';
// import { followUser } from "../../store/follows";

function UsersList() {
  // const dispatch = useDispatch();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   dispatch(followUser())

  // }

  const userComponents = users.map((user) => {
    return (
      <li key={user.id}>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
        {/* <button>Follow</button> */}
      </li>
    );
  });

  return (
    <>
      <h1>User List: </h1>
      <ul>{userComponents}</ul>
    </>
  );
}

export default UsersList;
