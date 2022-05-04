import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { followUser } from '../store/follows';
import { grabUserPhotos } from '../store/photo';
import PhotoModal from './photos/PhotoModal';
import CommentsFeed from './comments/CommentsFeed'

import PhotoContainer from './photos/PhotoContainer';

function User() {
  const dispatch = useDispatch()
  const currentUser = useSelector(state => state.session.user)
  const following = useSelector(state => state.session.following)
  const photos = useSelector(state => Object.values(state.photos))

  const [user, setUser] = useState({});
  const { userId } = useParams();

  const handleSubmit = async (e) => {
    e.preventDefault();


    dispatch(followUser(userId))
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

  useEffect(() => {
    dispatch(grabUserPhotos(userId))
  }, [dispatch])

  if (!user) {
    return null;
  }

  return (
    <><ul>
      <li>
        <strong>User Id</strong> {userId}
      </li>
      <li>
        <strong>Username</strong> {user.username}
      </li>
      <li>
        <strong>Email</strong> {user.email}
      </li>
      <button onClick={handleSubmit}>Follow</button>

    </ul>
      <ul>
        {photos.map(photo => (
          <li key={photo.id}>
            <PhotoContainer photo={photo} />
            <PhotoModal photo={photo} />
            <CommentsFeed photo={photo} />
          </li>
        ))}
      </ul>
    </>

  );
}
export default User;
