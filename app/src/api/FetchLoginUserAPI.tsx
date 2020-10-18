import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { fetchLoginUser } from 'clients/usersAPI';
import { usersActions } from 'actions/usersActions';
import { usersAPIActions } from 'actions/usersAPIActions';

export const FetchLoginUserAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const fetching = useSelector<RootState, boolean>(
    state => state.usersAPI.fetchingLoginUser
  );

  React.useEffect(() => {
    if(!fetching) return;

    fetchLoginUser()
      .then(res => res.json())
      .then(res => {
        if(!res.user) return;
        dispatch(usersActions.updateLogin(res.user.id));
      })
      .then(() => {
        dispatch(usersAPIActions.fetchLoginUserDone());
      })
      .catch(() => {
        dispatch(usersAPIActions.fetchLoginUserDone());
      });
  }, [fetching]);

  return null;
};
