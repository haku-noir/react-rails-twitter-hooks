const baseURL = 'http://localhost';

export const fetchTweets = () => fetch(`${baseURL}/tweets`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
});
