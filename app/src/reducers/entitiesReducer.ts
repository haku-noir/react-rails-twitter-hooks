import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { entitiesActions } from 'actions/entitiesActions';
import { useSelector } from 'react-redux';
import { RootState } from 'store';

export type TweetState = {
  id: number,
  content: string,
  user_id: number,
  time?: string
};

export const initialTweet: TweetState = {
  id: 0,
  content: "",
  user_id: 0
}

export type UserState = {
  id: number,
  name: string,
  password: string
};

export const initialUser: UserState = {
  id: 0,
  name: "",
  password: ""
}

export type EntitiesState = {
  tweets: TweetState[],
  users: UserState[]
};

const initialState: EntitiesState = {
  tweets: [],
  users: []
};

export const entitiesReducer = reducerWithInitialState(initialState)
  .case(entitiesActions.updateTweets, (state: EntitiesState, payload: EntitiesState["tweets"]): EntitiesState => ({
    ...state,
    tweets: payload,
  }))
  .case(entitiesActions.updateUsers, (state: EntitiesState, payload: EntitiesState["users"]): EntitiesState => ({
    ...state,
    users: payload,
  }));

export const findTweetById = (id: number): TweetState => {
  const tweets = useSelector<RootState, EntitiesState["tweets"]>(
    state => state.entities.tweets
  );

  return tweets.find((tweet) => tweet.id === id);
}

export const findUserById = (id: number): UserState => {
  const users = useSelector<RootState, EntitiesState["users"]>(
    state => state.entities.users
  );

  return users.find((user) => user.id === id);
};
