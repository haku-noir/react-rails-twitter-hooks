import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { loginUser } from 'clients/usersAPI';
import { UserState } from 'reducers/entitiesReducer';
import { usersAPIActions } from 'actions/usersAPIActions';
import { usersActions } from 'actions/usersActions';

export const LoginUserAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const loggedinUser = useSelector<RootState, UserState>(
    state => state.usersAPI.loggedinUser
  );

  React.useEffect(() => {
    if(!loggedinUser) return;

    loginUser(loggedinUser)
      .then(res => res.json())
      .then(res => {
        if(!res.user) return;
        dispatch(usersActions.updateLogin(res.user));
      })
      .then(() => {
        dispatch(usersAPIActions.loginUserDone());
      })
      .catch(() => {
        dispatch(usersAPIActions.loginUserDone());
      })
  }, [loggedinUser]);

  return null;
};
