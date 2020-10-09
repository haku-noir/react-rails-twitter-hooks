import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { TweetDetails as TweetDetailsComp } from 'components/TweetDetails';
import { RootState } from 'store';
import { EntitiesState, findTweetById, findUserById } from 'reducers/entitiesReducer';

type IProps = {};

export const TweetDetails: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const tweetId = useSelector<RootState, number>(
    state => state.tweets.details
  );
  const tweet = findTweetById(tweetId);
  const user = findUserById(tweet.user_id);

  const _props = {
    tweet,
    user
  }

  return <TweetDetailsComp {..._props}/>;
};
