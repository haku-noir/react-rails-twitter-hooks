import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { Tweet as TweetComp } from 'components/Tweet';
import { RootState } from 'store';
import { TweetState } from 'reducers/entitiesReducer';

type IProps = {
  tweetId: number
};

export const Tweet: React.FC<IProps> = (props: IProps) => {
  const { tweetId } = props;

  const dispatch = useDispatch<Dispatch<Action>>();

  const tweet = useSelector<RootState, TweetState>(
    state => state.entities.tweets[tweetId - 1]
  );

  const _props = {
    tweet
  }

  return <TweetComp {..._props}/>;
};
