import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { loginUser } from 'clients/usersAPI';
import { UserState } from 'reducers/entitiesReducer';
import { usersAPIActions } from 'actions/usersAPIActions';
import { usersActions } from 'actions/usersActions';
import { push } from 'connected-react-router';

export const LoginUserAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const loggedinUser = useSelector<RootState, UserState>(
    state => state.usersAPI.loggedinUser
  );

  React.useEffect(() => {
    if(!loggedinUser.name || !loggedinUser.password) return;

    loginUser(loggedinUser)
      .then(res => res.json())
      .then(res => {
        if(!res.user) throw new Error('Faild');
        dispatch(usersActions.updateLogin(res.user.id));
      })
      .then(() => {
        dispatch(usersAPIActions.loginUserDone());
      })
      .then(() => {
        dispatch(push('/'));
      })
      .catch(() => {
        dispatch(usersAPIActions.loginUserDone());
      })
  }, [loggedinUser]);

  return null;
};
