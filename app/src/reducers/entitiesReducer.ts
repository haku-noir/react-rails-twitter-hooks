import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { entitiesActions } from 'actions/entitiesActions';

export type TweetState = {
  id: number,
  content: string
};

export type UserState = {
  id: number,
  name: string,
  password: string
};

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
