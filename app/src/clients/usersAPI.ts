import { UserState } from "reducers/entitiesReducer";

const baseURL = 'http://localhost';

export const fetchUsers = () => fetch(`${baseURL}/users`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
});

export const updateUser = (user: UserState) => fetch(`${baseURL}/users/${user.id}`, {
  method: 'PUT',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
});

export const loginUser = (user: UserState) => fetch(`${baseURL}/login`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
});

export const logoutUser = () => fetch(`${baseURL}/logout`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
});

export const registerUser = (user: UserState) => fetch(`${baseURL}/users`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
});

export const fetchUserTweets = (userId: number) => fetch(`${baseURL}/users/${userId}/tweets`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
});

export const fetchLoginUser = () => fetch(`${baseURL}/session`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
});
