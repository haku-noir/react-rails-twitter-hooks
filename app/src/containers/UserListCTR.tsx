import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { UserList as UserListComp } from 'components/UserList';
import { RootState } from 'store';

type IProps = {};

export const UserList: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const data = useSelector<RootState, RootState>(
    state => state
  );

  const _props = {}

  return <UserListComp {..._props}/>;
};
