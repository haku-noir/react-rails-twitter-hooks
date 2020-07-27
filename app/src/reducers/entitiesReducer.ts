import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { entitiesActions } from 'actions/entitiesActions';

export type TweetState = {
  id: number,
  content: string
};

export type EntitiesState = {
  tweets: TweetState[]
};

const initialState: EntitiesState = {
  tweets: [],
};

export const entitiesReducer = reducerWithInitialState(initialState)
  .case(entitiesActions.updateTweets, (state: EntitiesState, payload: EntitiesState["tweets"]): EntitiesState => ({
    ...state,
    tweets: payload,
  }));

export const findTweetById = (tweets: TweetState[], id: number): TweetState => (
  tweets.find((tweet) => tweet.id === id)
);
