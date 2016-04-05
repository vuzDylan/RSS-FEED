'use strict';

export const ADD_USER_SUCCESS = 'ADD_USER_SUCCESS';
export const ADD_USER_FAIL = 'ADD_USER_FAIL';
export const ADD_FAVORITE_SUCCESS = 'ADD_FAVORITE_SUCCESS';
export const ADD_FAVORITE_FAIL = 'ADD_FAVORITE_FAIL';
export const REMOVE_FAVORITE_SUCCESS = 'REMOVE_FAVORITE_SUCCESS';
export const RETRIEVE_USERS = 'RETRIEVE_USERS';

function addUserSuccess(user) {
  return {
    type: ADD_USER_SUCCESS,
    user,
  };
}

function addUserFail(error) {
  return {
    type: ADD_USER_FAIL,
    error,
  };
}

function addFavoriteSuccess(user, fav) {
  return {
    type: ADD_FAVORITE_SUCCESS,
    user,
    fav,
  };
}

function addFavoriteFail(error) {
  return {
    type: ADD_FAVORITE_FAIL,
    error,
  };
}

function removeFavoriteSuccess(user, index) {
  return {
    type: REMOVE_FAVORITE_SUCCESS,
    user,
    index,
  };
}

function retrieveUsers(users) {
  return {
    type: RETRIEVE_USERS,
    users,
  };
}

export function addUser(user) {
  return (dispatch, getState) => {
    const users = getState().user;
    const uIndex = users.map(u => u.username).indexOf(user.username);
    if (uIndex === -1) {
      dispatch(addUserSuccess(user));
      localStorage.removeItem("users");
      localStorage.setItem("users", JSON.stringify(getState().user));
    }
    else {
      dispatch(addUserFail("User exsists"));
    }
  }
}

export function retrieve() {
  return dispatch => {
    const users = localStorage.getItem("users");
    if (users) {
      dispatch(retrieveUsers(JSON.parse(users)));
    }
  }
}

export function addFavorite(fav) {
  return dispatch => {
    return;
  }
}

export function removeFavorite(fav) {
  return dispatch => {
    return;
  }
}
