import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { entitiesActions } from 'actions/entitiesActions';

export type TweetState = {
  id: number,
  content: string,
  user_id: number
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

export const findTweetById = (tweets: TweetState[], id: number): TweetState => (
  tweets.find((tweet) => tweet.id === id)
);

export const findUserById = (users: UserState[], id: number): UserState => (
  users.find((user) => user.id === id)
);
