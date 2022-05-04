import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { followUser, removeFollow } from '../store/follows';

function User() {
  const dispatch = useDispatch()
  const following = useSelector(state => state.session.following)
  const [user, setUser] = useState({});
  const { userId } = useParams();

  const followedUser = following.find(user => user.id === +userId)

  const handleFollow = (e) => {
    e.preventDefault()

    if (followedUser) {
      dispatch(removeFollow(userId))
    } else {
      dispatch(followUser(userId))
    }
  }

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <>
      {following &&
        <ul>
          <li>
            <strong>User Id</strong> {userId}
          </li>
          <li>
            <strong>Username</strong> {user.username}
          </li>
          <li>
            <strong>Email</strong> {user.email}
          </li>
          {followedUser ? (
            <button onClick={handleFollow}>Unfollow</button>
          ) : (
            <button onClick={handleFollow}>Follow</button>
          )}
        </ul>
      }
    </>
  )
}
export default User;
