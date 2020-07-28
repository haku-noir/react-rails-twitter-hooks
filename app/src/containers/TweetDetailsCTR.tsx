import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { TweetDetails as TweetDetailsComp } from 'components/TweetDetails';
import { RootState } from 'store';
import { EntitiesState, findTweetById } from 'reducers/entitiesReducer';

type IProps = {};

export const TweetDetails: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const tweetId = useSelector<RootState, number>(
    state => state.tweets.details
  );
  const tweets = useSelector<RootState, EntitiesState["tweets"]>(
    state => state.entities.tweets
  );
  const tweet = findTweetById(tweets, tweetId);

  const _props = {
    tweet
  }

  return <TweetDetailsComp {..._props}/>;
};
