import { UsersState } from "reducers/usersReducer";

const baseURL = 'http://localhost';

export const fetchUsers = () => fetch(`${baseURL}/users`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
});

export const login = (user: UsersState) => fetch(`${baseURL}/login`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(user),
});

