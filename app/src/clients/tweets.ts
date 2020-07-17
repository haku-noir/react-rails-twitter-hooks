const baseURL = 'http://localhost';

export const fetchTweets = () => fetch(`${baseURL}/posts`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
});
