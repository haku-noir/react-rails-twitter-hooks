import { UserState } from "reducers/entitiesReducer";

const baseURL = 'http://localhost';

export const fetchUsers = () => fetch(`${baseURL}/users`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
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

