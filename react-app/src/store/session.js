import { LOAD_LIKES, POST_LIKE, DELETE_LIKE } from "./like";
import { GET_FOLLOWS, POST_FOLLOW, DELETE_FOLLOW } from './follows'
// constants
const SET_USER = 'session/SET_USER';
const REMOVE_USER = 'session/REMOVE_USER';

const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

const removeUser = () => ({
  type: REMOVE_USER,
})

const initialState = { user: null };

export const authenticate = () => async (dispatch) => {
  const response = await fetch('/api/auth/', {
    headers: {
      'Content-Type': 'application/json'
    }
  });
  if (response.ok) {
    const data = await response.json();
    if (data.errors) {
      return;
    }

    dispatch(setUser(data));
  }
}

export const login = (email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  });


  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }

}

export const logout = () => async (dispatch) => {
  const response = await fetch('/api/auth/logout', {
    headers: {
      'Content-Type': 'application/json',
    }
  });

  if (response.ok) {
    dispatch(removeUser());
  }
};


export const signUp = (firstName, lastName, username, email, password) => async (dispatch) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: firstName,
      last_name: lastName,
      username,
      email,
      password,
    }),
  });

  if (response.ok) {
    const data = await response.json();
    dispatch(setUser(data))
    return null;
  } else if (response.status < 500) {
    const data = await response.json();
    if (data.errors) {
      return data.errors;
    }
  } else {
    return ['An error occurred. Please try again.']
  }
}

export default function reducer(state = initialState, action) {
  let newState;
  switch (action.type) {
    case SET_USER:
      return { user: action.payload }
    case REMOVE_USER:
      return { user: null }
    case LOAD_LIKES:
      newState = { ...state }
      newState["likes"] = action.likes.likes
      return newState
    case POST_LIKE:
      // newState = { ...state }
      // newState.likes.push(action.like)
      return {
        ...state,
        likes: [...state.likes, action.like]
      }
    case DELETE_LIKE:
      // newState = { ...state }
      // const like = newState.likes.find(like => like.id == action.id)
      // const likeIdx = newState.likes.indexOf(like)
      // newState.likes.splice(likeIdx, 1)
      // return newState
      return {
        ...state,
        likes: state.likes.filter(like => like.id !== action.id)
      }
    case GET_FOLLOWS:
      newState = { ...state }
      // console.log('=======================action', action.user.following)

      //ARRAY
      // newState["following"] = action.user.following
      // newState["followers"] = action.user.followers

      // NORMALIZED
      newState['following'] = {}
      action.user.following.forEach(user => {
        newState.following[user.id] = user
      })
      newState['followers'] = {}
      action.user.followers.forEach(user => {
        newState.followers[user.id] = user
      })
      return newState
    case POST_FOLLOW:
      // console.log('==================', newState === state)
      // console.log('==================', newState)
      // // newState.following.push(action.user.following)
      // newState.following.push(action.user.following)
      // return newState

      //ARRAY
      // return {
      //   ...state,
      //   following: [...state.following, action.user.following]
      // }

      // NORMALIZED
      newState = { ...state }
      newState.following[action.user.following.id] = action.user.following
      return newState
    case DELETE_FOLLOW:
      // newState = { ...state }
      // const follow = newState.follow.find(user => user.id == action.id)
      // const followIdx = newState.likes.indexOf(follow)
      // newState.following.splice(followIdx, 1)
      // return newState
      // console.log('==================ACTIONID', action.id)
      // console.log('==================', state.following.filter(user => user.id !== +action.id))

      //ARRAY
      // return {
      //   ...state,
      //   following: state.following.filter(user => user.id !== +action.id)
      // }

      // NORMALIZED
      newState = { ...state }
      delete newState.following[action.id]
      return newState
    default:
      return state;
  }
}
