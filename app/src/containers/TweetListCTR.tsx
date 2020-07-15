import * as React from 'react';
import { Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { TweetList } from 'components/TweetList';
import { RootState } from 'store';

type IProps = {};

export const TweetListCTR: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Action>();

  const state = useSelector<RootState, RootState>(state => state);

  const _props = {}

  return <TweetList {..._props}/>;
};
