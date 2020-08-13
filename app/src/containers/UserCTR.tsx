import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { User as UserComp } from 'components/User';
import { RootState } from 'store';
import { EntitiesState, findUserById } from 'reducers/entitiesReducer';

type IProps = {
  userId: number
};

export const User: React.FC<IProps> = (props: IProps) => {
  const { userId } = props;

  const dispatch = useDispatch<Dispatch<Action>>();

  const users = useSelector<RootState, EntitiesState["users"]>(
    state => state.entities.users
  );
  const user = findUserById(users, userId);

  const _props = {
    user
  }

  return <UserComp {..._props}/>;
};
