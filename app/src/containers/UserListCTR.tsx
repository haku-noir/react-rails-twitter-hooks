import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { UserList as UserListComp } from 'components/UserList';
import { RootState } from 'store';
import { UsersState } from 'reducers/usersReducer';

type IProps = {};

export const UserList: React.FC<IProps> = (props: IProps) => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const userIds = useSelector<RootState, UsersState["index"]>(
    state => state.users.index
  );

  const _props = { userIds }

  return <UserListComp {..._props}/>;
};
