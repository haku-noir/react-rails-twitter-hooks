const baseURL = 'http://localhost';

export const fetchUsers = () => fetch(`${baseURL}/users`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
});
