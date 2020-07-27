import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Tweet as TweetComp } from 'components/Tweet';
import { RootState } from 'store';
import { EntitiesState, findTweetById } from 'reducers/entitiesReducer';

type IProps = {
  tweetId: number
};

export const Tweet: React.FC<IProps> = (props: IProps) => {
  const { tweetId } = props;

  const dispatch = useDispatch<Dispatch<Action>>();

  const tweets = useSelector<RootState, EntitiesState["tweets"]>(
    state => state.entities.tweets
  );
  const tweet = findTweetById(tweets, tweetId);

  const _props = {
    tweet
  }

  return <TweetComp {..._props}/>;
};
