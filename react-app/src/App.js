import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import PhotoFeed from './components/photos/PhotoFeed'
import PhotoForm from './components/photos/PhotoForm';
import Splash from './components/Splash';
import UserHome from './components/UserHome'

// import PhotoSRP from './components/photos/PhotoSRP'
import { authenticate } from './store/session';
import { grabLikes } from './store/like';
import { grabFollows } from './store/follows';


function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(authenticate());
      await dispatch(grabLikes());
      await dispatch(grabFollows());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <ProtectedRoute path='/users' exact={true} >
          <UsersList />
        </ProtectedRoute>
        <ProtectedRoute path='/users/:userId' exact={true} >
          <User />
        </ProtectedRoute>
        <ProtectedRoute path='/' exact={true} >
          <UserHome />
        </ProtectedRoute>
        <Route path='/splash' exact={true} >
          <Splash />
        </Route>
        <Route path='/photos'>
          <PhotoFeed />
          <PhotoForm />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
