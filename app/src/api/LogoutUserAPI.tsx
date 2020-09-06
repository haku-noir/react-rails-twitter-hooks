import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { logoutUser } from 'clients/usersAPI';
import { usersAPIActions } from 'actions/usersAPIActions';

export const LogoutUserAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const loggingout = useSelector<RootState, boolean>(
    state => state.usersAPI.loggingout
  );

  React.useEffect(() => {
    if(!loggingout) return;

    logoutUser()
      .then(() => {
        dispatch(usersAPIActions.logoutUser());
      })
      .then(() => {
        dispatch(usersAPIActions.logoutUserDone());
      })
  }, [loggingout]);

  return null;
};
