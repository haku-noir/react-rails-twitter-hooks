import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { fetchUsers } from 'clients/usersAPI';
import { entitiesActions } from 'actions/entitiesActions';
import { usersAPIActions } from 'actions/usersAPIActions';

export const FetchUsersAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const fetching = useSelector<RootState, boolean>(
    state => state.usersAPI.fetching
  );

  React.useEffect(() => {
    if(!fetching) return;

    fetchUsers()
      .then(res => res.json())
      .then(res => {
        if(!res.users) return;
        dispatch(entitiesActions.updateUsers(res.users));
      })
      .then(() => {
        dispatch(usersAPIActions.fetchUsersDone());
      })
      .catch(() => {
        dispatch(usersAPIActions.fetchUsersDone());
      });
  }, [fetching]);

  return null;
};
