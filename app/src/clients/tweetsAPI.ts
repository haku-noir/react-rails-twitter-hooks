import { TweetState } from "reducers/entitiesReducer";

const baseURL = 'http://localhost';

export const fetchTweets = () => fetch(`${baseURL}/tweets`, {
  method: 'GET',
  mode: 'cors',
  credentials: 'include',
});

export const sendTweet = (content: string) => fetch(`${baseURL}/tweets`, {
  method: 'POST',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ content }),
});

export const updateTweet = (tweet: TweetState) => fetch(`${baseURL}/tweets/${tweet.id}`, {
  method: 'PUT',
  mode: 'cors',
  credentials: 'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(tweet),
});

export const deleteTweet = (id: number) => fetch(`${baseURL}/tweets/${id}`, {
  method: "DELETE",
  mode: 'cors',
  credentials: 'include',
});
