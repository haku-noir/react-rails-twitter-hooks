import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { UserDetails as UserDetailsComp } from 'components/UserDetails';
import { RootState } from 'store';

type IProps = {};

export const UserDetails: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {}

  return <UserDetailsComp {..._props}/>;
};
