import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { grabUserPhotos } from '../store/photo';
import PhotoModal from './photos/PhotoModal';
import CommentsFeed from './comments/CommentsFeed'

import PhotoContainer from './photos/PhotoContainer';
import { followUser, grabUserFollows, removeFollow } from '../store/follows';
import FollowsContainer from './follows/FollowsContainer';
import './User.css'


function User() {
  const dispatch = useDispatch()
  const following = useSelector(state => state.session.following)
  const photos = useSelector(state => Object.values(state.photos))
  const [loaded, setLoaded] = useState(false)
  const [user, setUser] = useState({});
  const { userId } = useParams();

  let followedUser
  if (following) followedUser = following[userId]

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

  useEffect(async () => {
    await dispatch(grabUserPhotos(userId))
    setLoaded(true)
  }, [dispatch])

  if (!user) {
    return null;
  }

  return (
    <>
      {following &&
        <ul className='user-details'>

          <li>
            (@{user.username}) {user.first_name} {user.last_name}
          </li>
          {followedUser ? (
            <button onClick={handleFollow}>Unfollow</button>
          ) : (
            <button onClick={handleFollow}>Follow</button>
          )}
        </ul>
      }
      {/* <FollowsContainer profileUser={user} /> */}
      {loaded &&
        <ul>
          {photos.map(photo => (
            <li key={photo.id}>
              {/* <PhotoContainer photo={photo} /> */}
              <PhotoModal photo={photo} />
              <CommentsFeed photo={photo} />
            </li>
          ))}
        </ul>
      }
    </>
  )
}
export default User;
