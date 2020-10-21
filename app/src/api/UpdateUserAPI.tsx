import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { UserState } from 'reducers/entitiesReducer';
import { updateUser } from 'clients/usersAPI';
import { usersAPIActions } from 'actions/usersAPIActions';

export const UpdateUserAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const updatedUser = useSelector<RootState, UserState>(
    state => state.usersAPI.updatedUser
  );

  React.useEffect(() => {
    if(updatedUser.id === 0) return;

    updateUser(updatedUser)
      .then(() => {
        dispatch(usersAPIActions.fetchUsers());
      })
      .then(() => {
        dispatch(usersAPIActions.updateUserDone());
      })
      .catch(() => {
        dispatch(usersAPIActions.updateUserDone());
      });
  }, [updatedUser]);

  return null;
};
