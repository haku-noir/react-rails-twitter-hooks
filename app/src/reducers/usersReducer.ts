import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { usersActions } from 'actions/usersActions';
import { UserState } from './entitiesReducer';

export type UsersState = {
  index: number[],
  login: number
};

const initialState: UsersState = {
  index: [],
  login: 0
};

export const usersReducer = reducerWithInitialState(initialState)
  .case(usersActions.updateIndex, (state: UsersState, payload: number[]): UsersState => ({
    ...state,
    index: payload,
  }))
  .case(usersActions.updateLogin, (state: UsersState, payload: number): UsersState => ({
    ...state,
    login: payload,
  }))
  .case(usersActions.setLogout, (state: UsersState): UsersState => ({
    ...state,
    login: 0,
  }))
