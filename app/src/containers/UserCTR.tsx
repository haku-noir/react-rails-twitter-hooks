import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { User as UserComp } from 'components/User';
import { RootState } from 'store';

type IProps = {};

export const User: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {}

  return <UserComp {..._props}/>;
};
