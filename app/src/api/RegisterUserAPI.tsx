import * as React from 'react';
import { Dispatch, Action } from 'redux';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from 'store';
import { registerUser } from 'clients/usersAPI';
import { UserState } from 'reducers/entitiesReducer';
import { usersAPIActions } from 'actions/usersAPIActions';
import { usersActions } from 'actions/usersActions';
import { push } from 'connected-react-router';

export const RegisterUserAPI: React.FC<{}> = () => {
  const dispatch = useDispatch<Dispatch<Action>>();

  const registeredUser = useSelector<RootState, UserState>(
    state => state.usersAPI.registeredUser
  );

  React.useEffect(() => {
    if(!registeredUser.name || !registeredUser.password) return;

    registerUser(registeredUser)
      .then(res => res.json())
      .then(res => {
        if(!res.user) throw new Error('Faild');
        dispatch(usersActions.updateLogin(res.user.id));
      })
      .then(() => {
        dispatch(usersAPIActions.registerUserDone());
      })
      .then(() => {
        dispatch(push('/'));
      })
      .catch(() => {
        dispatch(usersAPIActions.registerUserDone());
      })
  }, [registeredUser]);

  return null;
};
