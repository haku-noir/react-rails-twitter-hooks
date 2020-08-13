import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { EntitiesState } from 'reducers/entitiesReducer';
import { UsersState } from 'reducers/usersReducer';
import { usersActions } from 'actions/usersActions';

const extract = (users: EntitiesState["users"]): UsersState["index"] => (
  users.map(user => user.id)
);

export const UsersIndexExtractor: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const users = useSelector<RootState, EntitiesState["users"]>(
    state => state.entities.users
  );

  React.useEffect(() => {
    const index = extract(users);

    dispatch(usersActions.updateIndex(index))
  }, [users]);

  return null;
};
