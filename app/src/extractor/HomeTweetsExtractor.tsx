import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { EntitiesState } from 'reducers/entitiesReducer';
import { TweetsState } from 'reducers/tweetsReducer';
import { tweetsActions } from 'actions/tweetsActions';

const extract = (tweets: EntitiesState["tweets"]): TweetsState["home"] => (
  tweets.map(tweet => tweet.id)
)

export const HomeTweetsExtractor: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const tweets = useSelector<RootState, EntitiesState["tweets"]>(state => state.entities.tweets);

  React.useEffect(() => {
    const homeTweets = extract(tweets);

    dispatch(tweetsActions.updateHome(homeTweets))
  }, [tweets]);

  return null;
};
