'use strict';

import {
  ADD_USER_SUCCESS,
  ADD_FAVORITE_SUCCESS,
  REMOVE_FAVORITE_SUCCESS,
  RETRIEVE_USERS,
} from '../actions/user';
import { LOGIN_SUCCESS } from '../actions/auth';

function addFav(user, fav) {
  return {
    username: user.username,
    password: user.password,
    favorites: [
      ...favorites,
      fav
    ],
  };
}

function removeFav(user, index) {
  return {
    username: user.username,
    password: user.password,
    favorites: [
      ...favorites.slice(0, index),
      ...favorites.slice(index + 1),
    ],
  };
}

function newUser(user) {
  return {
    username: user.username,
    password: user.password,
    favorites: [],
    last: null,
  };
}

function updateLast(user) {
  return {
    username: user.username,
    password: user.password,
    favorites: user.favorites,
    last: new Date().toString(),
  };
}

export default function users(state=[], action) {
  switch(action.type) {
    case ADD_USER_SUCCESS:
      return [
        ...state,
        newUser(action.user),
      ];
    case ADD_FAVORITE_SUCCESS:
      return [
        ...state.slice(0, action.user),
        addFav(state[action.user], action.fav),
        ...state.slice(action.user + 1),
      ];
    case REMOVE_FAVORITE_SUCCESS:
      return [
        ...state.slice(0, action.user),
        removeFav(state[action.user], action.index),
        ...state.slice(action.user + 1),
      ];
    case LOGIN_SUCCESS:
      return [
        ...state.slice(0, action.user),
        updateLast(state[action.index]),
        ...state.slice(action.user + 1),
      ]
    case RETRIEVE_USERS:
      return action.users;
    default:
      return state;
  }
}
